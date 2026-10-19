export const dynamic = "force-dynamic";

import { ProposalsClient } from "./proposals-client";
import { t } from "@/lib/i18n";

export default function ProposalsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-sm text-muted mb-2 tracking-wide">{t("proposals.badge")}</div>
      <h1 className="text-2xl font-bold text-accent mb-1">{t("proposals.title")}</h1>
      <p className="text-sm text-muted mb-8">
        {t("proposals.description")}
      </p>
      <ProposalsClient />
    </div>
  );
}
