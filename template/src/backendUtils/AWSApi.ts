import { API } from "aws-amplify";

export async function AWSApiRequest(action: string, email: string ) {

    try {
        let answer = await API.get(
            "userDataAPI",
            `/getUser?email=${email}`,
            undefined
        );
        return answer;
    } catch (error) {
        console.log(`There was an error checking user ${email}.`, error);
        throw error;
    }
}
