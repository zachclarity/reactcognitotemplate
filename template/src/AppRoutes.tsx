import ReactRouterExtendedProvider, { Switch } from 'react-router-extended';
import {FunctionComponent} from "react";
import routes from "./config/RoutesConfig"
// import {currentUser} from "./AuthUtil";



export const AppRoutes: FunctionComponent = () => {

    const authenticated = false; //useAuthenticated();

    /*function redirectPath(componentProps: any) {
        if (componentProps.invitationCode) {
            return `/invitation?code=${componentProps.invitationCode}`;
        }
        return "/login";
    }*/

    return (
        <ReactRouterExtendedProvider
            authenticated={authenticated}
            initialA11yMessage="Welcome to JerryWithAZ"
            initialDocumentTitle="JerryWithAZ"
            routes={routes}
            FoundComponent={() => <Switch routes={routes} />}
            NotFoundComponent={() => <div>Page not found</div>}
         redirectPathAfterLogin={"home"}/>
    );
}
