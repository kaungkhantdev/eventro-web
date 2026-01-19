import { SettingTabs } from "@/components/layout/setting-tabs";
import AccountContent from "@/features/profile/components/account-content";
import GeneralContent from "@/features/profile/components/general-content";

const tabs = [
  {
    trigger: "general",
    contentData: GeneralContent,
  },
  {
    trigger: "account",
    contentData: AccountContent,
  },
];

export default function ProfilePage() {
  return <SettingTabs tabs={tabs} />;
}