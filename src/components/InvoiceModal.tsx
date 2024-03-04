/* eslint-disable @typescript-eslint/no-explicit-any */
// src/features/invoices/InvoiceModal.tsx
import React from "react";

const InvoiceModal = ({ invoice, onClose }: any) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "20%",
        left: "30%",
        backgroundColor: "white",
        padding: "20px",
        zIndex: 1000,
      }}
    >
      <h2>Invoice Details</h2>
      <p>
        <strong>ID:</strong> {invoice.id}
      </p>
      <p>
        <strong>Description:</strong> {invoice.description}
      </p>
      <p>
        <strong>Amount:</strong> ${invoice.amount}
      </p>
      <p>
        <strong>Due Date:</strong> {invoice.due_date}
      </p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default InvoiceModal;
