export type AmplifyDependentResourcesAttributes = {
    "api": {
        "matchup": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "auth": {
        "matchup": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "storage": {
        "s3matchupstorageb0c9ab6f": {
            "BucketName": "string",
            "Region": "string"
        }
    },
    "function": {
        "matchupe757c159": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "geo": {
        "placeindex92e6cd50": {
            "Name": "string",
            "Region": "string",
            "Arn": "string"
        },
        "mapf19b652b": {
            "Name": "string",
            "Style": "string",
            "Region": "string",
            "Arn": "string"
        }
    }
}