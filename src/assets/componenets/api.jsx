export const api_text = {
    para1 : "API stands for Application Programming Interface. It is a set of rules and protocols that allows different software applications to communicate and interact with each other. APIs define how different components of software systems should interact, enabling developers to access and utilize the functionalities of other software components or services without needing to understand their underlying implementation details.",
    para2 : "Here are the basics of APIs:",
    
    Purpose : {
        description : "APIs serve as a contract between different software components, allowing them to exchange information and perform specific tasks. APIs abstract away the internal complexities of a system, providing a simplified interface for developers to interact with."
    },

    Types : {
        
        Web : {
            description : "Web APIs, also known as HTTP APIs or REST APIs, are the most common type of API used on the web. They allow applications to communicate over the internet using standard protocols such as HTTP. Web APIs are typically accessed using URLs and support various HTTP methods like GET, POST, PUT, DELETE."
        },
        Library : {
            description : " Libraries or software development kits (SDKs) provide a collection of pre-built functions and modules that developers can use in their applications. These APIs are typically specific to a programming language or platform and provide ready-made functionalities to simplify development."
        }
    
    },

    
    Req_Res : { //request and response mechanism
            description : "APIs work through a request-response mechanism. A client (requester) sends a request to an API, specifying the desired action or data. The API processes the request and sends back a response containing the requested data or the outcome of the action. The request and response can be in different formats, such as JSON, XML, or even binary."
        },
    

    Endpoints : {
        description : "API endpoints are specific URLs or routes that represent different functionalities or resources exposed by an API. Each endpoint corresponds to a specific action or data retrieval operation."
    },
    Auth : { //authentication and authorization
        description : "APIs often require authentication and authorization to ensure secure access and protect sensitive data. Authentication verifies the identity of the client making the request, while authorization determines whether the authenticated client has permission to access the requested resource or perform the requested action."
    },
    Documentation : {
        description : "API documentation is essential for developers to understand how to use an API correctly. It provides details about available endpoints, request/response formats, authentication methods, error handling, and any specific rules or limitations imposed by the API."
    },
    Rate_Limit : {
        description : "To manage server resources and prevent abuse, APIs may enforce rate limiting. Rate limiting sets restrictions on the number of requests a client can make within a specific time period."
    },
    para3 : "APIs play a fundamental role in modern software development, enabling developers to leverage existing services, integrate different systems, and build scalable and interoperable applications. They empower developers to build on top of existing functionalities and promote code reusability and modularity."

}