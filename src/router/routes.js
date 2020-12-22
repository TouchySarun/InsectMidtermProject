import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
import Introduction from "@/pages/Introduction.vue";
import UserProfile from "@/pages/UserProfile.vue";
import Notifications from "@/pages/Notifications.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Typography from "@/pages/Typography.vue";
import TableList from "@/pages/TableList.vue";
import Anatomy from "@/pages/Anatomy.vue";
import MedicalRelated from "@/pages/MedicalRelated.vue";
import LifeCycle from "@/pages/LifeCycle.vue";
import Behavior from "@/pages/Behavior";
import Type from "@/pages/Type";
import Control from "@/pages/Control";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Introduction",
        component: Introduction
      },
      {
        path: "MedicalRelated",
        name: "Medical Related",
        component: MedicalRelated,
      },
      {
        path: "Anatomy",
        name: "Anatomy of ant",
        component: Anatomy
      },
      {
        path: "LifeCycle",
        name: "Ant's Life Cycle",
        component: LifeCycle
      },
      {
        path: "Behavior",
        name: "Behavior of ant",
        component: Behavior
      },
      {
        path: "Type",
        name: "Type of ant",
        component: Type
      },
      {
        path: "Control",
        name: "How to control ants",
        component: Control
      },
      {
        path: "stats",
        name: "stats",
        component: UserProfile
      },
      {
        path: "notifications",
        name: "notifications",
        component: Notifications
      },
      {
        path: "icons",
        name: "icons",
        component: Icons
      },
      {
        path: "typography",
        name: "typography",
        component: Typography
      },
      {
        path: "table-list",
        name: "table-list",
        component: TableList
      }
    ]
  },
  { path: "*", component: NotFound }
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
