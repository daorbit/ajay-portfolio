import Script from "next/script";
import { QUANTALOG_SITE_ID, QUANTALOG_TRACKER_SRC } from "@/constants/analytics";

export default function QuantalogTracker() {
  return <Script src={QUANTALOG_TRACKER_SRC} data-site={QUANTALOG_SITE_ID} strategy="afterInteractive" />;
}
