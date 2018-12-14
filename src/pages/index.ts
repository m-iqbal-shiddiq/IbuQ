import { TimelinePage } from "./timeline/timeline";
import { DashboardPage } from "./dashboard/dashboard";
import { AkunsayaPage } from "./akunsaya/akunsaya";
import { TabsPage } from "./tabs/tabs";


export const MainPage = TabsPage;

// The initial root pages for our tabs (remove if not using tabs)
export const Tab1Root = TimelinePage;
export const Tab2Root = DashboardPage;
export const Tab3Root = AkunsayaPage;
