"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import "../cert.css";

// Basic icons using SVG
const Icons = {
    Upload: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>,
    File: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><polyline points="13 2 13 9 20 9" /></svg>,
    Check: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>,
    XCircle: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" /></svg>,
    Shield: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
    QrCode: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>,
    ToggleRight: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="5" width="22" height="14" rx="7" ry="7" /><circle cx="16" cy="12" r="3" /></svg>,
    ToggleLeft: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="5" width="22" height="14" rx="7" ry="7" /><circle cx="8" cy="12" r="3" /></svg>,
    ChevronDown: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>,
    AlertTriangle: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>,
};

export default function AdminDashboard() {
    const [stats, setStats] = useState({ totalCertificates: 0, activeCertificates: 0, revokedCertificates: 0, distinctEvents: 0, distinctEmails: 0 });
    const [events, setEvents] = useState<string[]>([]);
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);
    const [uploadResult, setUploadResult] = useState<any>(null);

    const [certificates, setCertificates] = useState<any[]>([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const [qrModal, setQrModal] = useState<{ isOpen: boolean; qrCode: string; url: string }>({ isOpen: false, qrCode: "", url: "" });
    const [showSuperAdmin, setShowSuperAdmin] = useState(false);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const fetchStats = useCallback(async () => {
        try {
            const res = await fetch("/api/cert/admin");
            if (res.ok) {
                const data = await res.json();
                setStats(data.stats);
                setEvents(data.events);
            }
        } catch (e) { }
    }, []);

    const fetchCertificates = useCallback(async (p: number) => {
        try {
            const res = await fetch(`/api/cert/certificates?page=${p}&limit=10`);
            if (res.ok) {
                const data = await res.json();
                setCertificates(data.certificates);
                setTotalPages(data.totalPages || 1);
                setPage(data.page);
            }
        } catch (e) { }
    }, []);

    useEffect(() => {
        fetchStats();
        fetchCertificates(1);
    }, [fetchStats, fetchCertificates]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            const droppedFile = e.dataTransfer.files[0];
            if (droppedFile.name.endsWith(".csv")) setFile(droppedFile);
        }
    };

    const uploadFile = async () => {
        if (!file) return;
        setUploading(true);
        setUploadResult(null);

        const formData = new FormData();
        formData.append("file", file);

        try {
            const res = await fetch("/api/cert/upload", { method: "POST", body: formData });
            const data = await res.json();
            setUploadResult(data);
            if (res.ok) {
                setFile(null);
                fetchStats();
                fetchCertificates(1);
            }
        } catch (e) {
            setUploadResult({ error: "Upload failed" });
        } finally {
            setUploading(false);
        }
    };

    const showQr = async (id: string) => {
        try {
            const res = await fetch(`/api/cert/certificates/${id}/qrcode`);
            if (res.ok) {
                const data = await res.json();
                setQrModal({ isOpen: true, qrCode: data.qrCode, url: data.url });
            }
        } catch (e) { }
    };

    const toggleRevoke = async (id: string) => {
        try {
            const res = await fetch(`/api/cert/certificates/${id}/revoke`, { method: "PATCH" });
            if (res.ok) {
                fetchStats();
                fetchCertificates(page);
            }
        } catch (e) { }
    };

    const executeAdminAction = async (action: string, eventName?: string) => {
        if (!confirm(`Are you sure you want to execute: ${action}?`)) return;
        try {
            const res = await fetch("/api/cert/admin", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ action, eventName })
            });
            if (res.ok) {
                fetchStats();
                fetchCertificates(1);
                alert((await res.json()).message);
            }
        } catch (e) { }
    };

    return (
        <div className="admin-container fade-in">
            <div className="admin-header">
                <div className="header-content">
                    <div className="header-icon"><Icons.Shield /></div>
                    <div>
                        <h1>Certificate issuing and management center.</h1>
                        <p className="header-subtitle">Upload CSV files to issue certificates in bulk via Supabase.</p>
                    </div>
                </div>
            </div>

            <div className="stats-bar">
                <div className="stat-card fade-in-up" style={{ animationDelay: "0.1s" }}>
                    <span className="stat-number">{stats.totalCertificates}</span>
                    <span className="stat-label">Total Issued</span>
                </div>
                <div className="stat-card fade-in-up" style={{ animationDelay: "0.2s" }}>
                    <span className="stat-number">{stats.activeCertificates}</span>
                    <span className="stat-label">Active</span>
                </div>
                <div className="stat-card fade-in-up" style={{ animationDelay: "0.3s" }}>
                    <span className="stat-number">{stats.distinctEvents}</span>
                    <span className="stat-label">Events</span>
                </div>
            </div>

            <div className="upload-section fade-in-up" style={{ animationDelay: "0.4s" }}>
                <h2 className="section-title">Issue New Certificates</h2>
                <div
                    className={`dropzone ${file ? "dropzone-has-file" : ""}`}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                >
                    <div className="dropzone-content">
                        {file ? (
                            <>
                                <div className="file-icon"><Icons.Check /></div>
                                <p className="file-name">{file.name}</p>
                                <p className="file-size">{(file.size / 1024).toFixed(1)} KB</p>
                            </>
                        ) : (
                            <>
                                <div className="upload-icon"><Icons.Upload /></div>
                                <p className="dropzone-text"><span>Click to upload</span> or drag and drop</p>
                                <p className="dropzone-hint">CSV files only (name, email, event_name, issue_date)</p>
                            </>
                        )}
                    </div>
                </div>
                <input type="file" accept=".csv" ref={fileInputRef} onChange={handleFileChange} className="hidden" />

                <button className="upload-btn" onClick={uploadFile} disabled={!file || uploading}>
                    {uploading ? <span className="spinner"></span> : <Icons.File />}
                    {uploading ? "Processing..." : "Process CSV"}
                </button>

                {uploadResult && (
                    <div className="result-section fade-in">
                        {uploadResult.error ? (
                            <div className="result-stat result-warning">{uploadResult.error}</div>
                        ) : (
                            <>
                                <div className="result-stats">
                                    <div className="result-stat result-success">
                                        <span className="result-number">{uploadResult.inserted}</span>
                                        <span>Successfully Issued</span>
                                    </div>
                                    <div className="result-stat result-warning">
                                        <span className="result-number">{uploadResult.skipped}</span>
                                        <span>Skipped (Errors/Duplicates)</span>
                                    </div>
                                </div>
                                {uploadResult.skippedDetails?.length > 0 && (
                                    <div className="skipped-details">
                                        <h3>Skipped Rows Details</h3>
                                        {uploadResult.skippedDetails.map((s: any, i: number) => (
                                            <div key={i} className="skipped-row">
                                                <span className="skipped-name">{s.row.name || "Unknown"} ({s.row.event_name || "Unknown Event"})</span>
                                                <span className="skipped-reason">{s.reason}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                )}
            </div>

            {certificates.length > 0 ? (
                <div className="table-section fade-in-up" style={{ animationDelay: "0.5s" }}>
                    <h2 className="section-title">Recent Certificates</h2>
                    <div className="table-container">
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th>Recipient</th>
                                    <th>Event</th>
                                    <th>Issue Date</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {certificates.map(cert => (
                                    <tr key={cert.id} className={cert.is_revoked === 1 ? "row-revoked" : ""}>
                                        <td>
                                            <div className="cell-name">{cert.name}</div>
                                            <div className="cell-email">{cert.email || "No email"}</div>
                                        </td>
                                        <td>{cert.event_name}</td>
                                        <td>{cert.issue_date}</td>
                                        <td>
                                            {cert.is_revoked === 0
                                                ? <span className="status-badge status-active">ACTIVE</span>
                                                : <span className="status-badge status-revoked">REVOKED</span>}
                                        </td>
                                        <td>
                                            <div className="action-buttons">
                                                <button className="action-btn" title="View QR" onClick={() => showQr(cert.id)}>
                                                    <Icons.QrCode />
                                                </button>
                                                <button
                                                    className={`action-btn ${cert.is_revoked === 0 ? "btn-revoke" : "btn-restore"}`}
                                                    title={cert.is_revoked === 0 ? "Revoke" : "Restore"}
                                                    onClick={() => toggleRevoke(cert.id)}
                                                >
                                                    {cert.is_revoked === 0 ? <Icons.ToggleRight /> : <Icons.ToggleLeft />}
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {totalPages > 1 && (
                        <div className="pagination">
                            <button className="page-btn" disabled={page === 1} onClick={() => fetchCertificates(page - 1)}>Previous</button>
                            <span className="page-info">Page {page} of {totalPages}</span>
                            <button className="page-btn" disabled={page === totalPages} onClick={() => fetchCertificates(page + 1)}>Next</button>
                        </div>
                    )}
                </div>
            ) : (
                <div className="table-section empty-state fade-in-up" style={{ animationDelay: "0.5s" }}>
                    <div className="upload-icon" style={{ opacity: 0.5 }}><Icons.File /></div>
                    <h3>No certificates found</h3>
                    <p>Upload a CSV to start issuing certificates.</p>
                </div>
            )}

            {/* Super Admin Options */}
            <div className="superadmin-section fade-in-up" style={{ animationDelay: "0.6s" }}>
                <button className="superadmin-toggle" onClick={() => setShowSuperAdmin(!showSuperAdmin)}>
                    <div className="superadmin-toggle-content">
                        <Icons.AlertTriangle />
                        <span>Super Admin Settings</span>
                    </div>
                    <Icons.ChevronDown />
                </button>

                {showSuperAdmin && (
                    <div className="superadmin-panel fade-in">
                        <div className="sa-btn-grid" style={{ marginTop: "16px" }}>
                            <button className="sa-btn sa-btn-warning" onClick={() => executeAdminAction("revoke_all")}>Revoke All</button>
                            <button className="sa-btn sa-btn-success" onClick={() => executeAdminAction("restore_all")}>Restore All</button>
                            <button className="sa-btn sa-btn-danger" onClick={() => executeAdminAction("clear_all")}>Clear Records</button>
                            <button className="sa-btn sa-btn-danger" onClick={() => executeAdminAction("drop_db")}>Drop DB Items</button>
                        </div>

                        {events.length > 0 && (
                            <div style={{ marginTop: "24px" }}>
                                <h3 className="sa-section-title">Delete by Event</h3>
                                <div className="sa-event-list">
                                    {events.map((evt, i) => (
                                        <div className="sa-event-row" key={i}>
                                            <span className="sa-event-name">{evt}</span>
                                            <button className="sa-btn sa-btn-sm sa-btn-danger" onClick={() => executeAdminAction("delete_event", evt)}>Delete Event</button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* QR Modal */}
            {qrModal.isOpen && (
                <div className="modal-overlay" onClick={() => setQrModal({ isOpen: false, qrCode: "", url: "" })}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setQrModal({ isOpen: false, qrCode: "", url: "" })}><Icons.XCircle /></button>
                        <h3 className="modal-title">Certificate QR Code</h3>
                        <p className="modal-subtitle">Scan to verify authenticity</p>
                        <div className="qr-image-wrap">
                            <img src={qrModal.qrCode} alt="QR Code" className="qr-image" />
                        </div>
                        <a href={qrModal.url} target="_blank" rel="noopener noreferrer" className="qr-url block text-center truncate hover:underline text-indigo-500 mt-4">
                            {qrModal.url}
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}
