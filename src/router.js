import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Collection from "./pages/Collection/Collection";
import ComingSoon from "./pages/comingSoon/ComingSoon";
import NotFoundPage from "./pages/404Page/NotFoundPage";
import MintNow from "./pages/MintPage/MintNow";
import GamePage from "./pages/GamePage/GamePage";
import Roadmap from "./pages/Roadmap/Roadmap";
import HistorySection from "./sections/HistorySection/HistorySection";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import TermsNCondition from "./pages/TermsNCondition/TermsNCondition";
// import ClainNftPage from "./pages/ClaimNftPage/ClaimNftPage";
import StakingPage from "./pages/StakingPage/StakingPage";
import BridgePage from "./pages/BridgePage/BridgePage";
import { ExternalRedirect } from "./components/externalRedirect/ExternalRedirect";
// import StakingV1Page from "./pages/StakingV1Page/StakingV1Page";

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/collection",
      element: <Collection />,
    },
    {
      path: "/history",
      element: <HistorySection />,
    },
    {
      path: "/staking",
      element: <StakingPage />,
    },
    {
      path: "/bridge",
      element: <BridgePage />,
    },
    {
      path: "/roadmap",
      element: <Roadmap />,
    },
    {
      path: "/coming-soon",
      element: <ComingSoon />,
    },
    {
      path: "/mint",
      element: <MintNow />,
    },
    {
      path: "/game",
      element: <GamePage />,
    },
    {
      path: "/privacy-policy",
      element: <PrivacyPolicy />,
    },
    {
      path: "/terms-&-conditions",
      element: <TermsNCondition />,
    },
    { path: "/marketplace", element: <ExternalRedirect to="https://bros_4.x.rarible.com/explore/POLYGON:0xcb124cf226f045fa49b1793031c79da517387f7f" /> },
    {
      path: "/404",
      element: <NotFoundPage />,
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
    // {
    //   path: "/staking-v1",
    //   element: <StakingV1Page />,
    // },
  ]);

  return routes;
}