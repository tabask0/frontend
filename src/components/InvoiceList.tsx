/* eslint-disable @typescript-eslint/no-explicit-any */
// src/features/invoices/InvoiceList.tsx
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchInvoices } from "../store/invoiceThunk";
import InvoiceModal from "./InvoiceModal";

const InvoiceList = () => {
  const dispatch = useAppDispatch();
  const { invoices, status }: any = useAppSelector((state) => state.invoices);
  const [selectedInvoice, setSelectedInvoice] = React.useState(null);

  useEffect(() => {
    dispatch(fetchInvoices());
  }, [dispatch]);

  return (
    <div>
      <h2>Invoices</h2>
      {status === "loading" && <div>Loading...</div>}
      {status === "failed" && <div>Error fetching invoices.</div>}
      <div>
        <button onClick={() => dispatch(fetchInvoices())}>Fetch</button>
      </div>
      <ul>
        {invoices?.map((invoice: any) => (
          <li key={invoice.id} onClick={() => setSelectedInvoice(invoice)}>
            Invoice #{invoice.id}: {invoice.description} - ${invoice.amount}
          </li>
        ))}
      </ul>
      {selectedInvoice && (
        <InvoiceModal
          invoice={selectedInvoice}
          onClose={() => setSelectedInvoice(null)}
        />
      )}
    </div>
  );
};

export default InvoiceList;
