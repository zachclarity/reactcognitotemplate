import { Amplify, Auth } from 'aws-amplify';
import AWSConfig from "./config/AWSConfig";

export function awsSetup() {

    try {
        let amplifyConfig = {
            Auth: {
                mandatorySignIn: true,
                region: AWSConfig.cognito.REGION,
                userPoolId: AWSConfig.cognito.USER_POOL_ID,
                identityPoolId: AWSConfig.cognito.IDENTITY_POOL_ID,
                userPoolWebClientId: AWSConfig.cognito.APP_CLIENT_ID,
                oauth: {
                    domain: AWSConfig.cognito.APP_CLIENT_DOMAIN,
                    redirectSignIn: window.location.origin + "/",
                    redirectSignOut: window.location.origin,
                    scope: ['email', 'openid', 'aws.cognito.signin.user.admin', 'profile'],
                    responseType: 'token'
                }
            },
            Storage: {
                region: AWSConfig.s3.REGION,
                bucket: AWSConfig.s3.BUCKET,
                identityPoolId: AWSConfig.cognito.IDENTITY_POOL_ID
            },
            API: {
                endpoints: [
                    {
                        name: "changeRequestAPI",
                        endpoint: AWSConfig.apiGateway.URL,
                        region: AWSConfig.apiGateway.REGION
                    },
                    {
                        name: "userDataAPI",
                        endpoint: AWSConfig.apiGateway.URL,
                        region: AWSConfig.apiGateway.REGION
                    },
                ]
            }
        };

        Amplify.configure(amplifyConfig);
    } catch (error) {
        //console.log(error)
        return undefined
    }
}
export async function currentUser()
{

    try {
        awsSetup()

        const authUser = await Auth.currentAuthenticatedUser();
        return authUser.signInUserSession.idToken.payload.email;

    } catch (error) {
        //console.log(error)
        return undefined
    }
}
