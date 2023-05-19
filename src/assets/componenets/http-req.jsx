export const http_rq_text = {
    para1 : "HTTP requests are the means by which clients make requests to servers to retrieve or send data.",
    para2 : "Some basics of HTTP requests:",

    Methods : {
        Get : {
            description : "Retrieves data from the server. It is used to request resources like web pages, images, etc.",
        },
        Post : {
            description : "Sends data to the server for processing, often used for submitting forms or creating resources.",
        },
        Put : {
            description : "Updates an existing resource on the server.",
        },
        Delete : {
            description : "Removes a resource from the server.",
        },
        Patch : {
            description : "Partially updates a resource on the server.",
        }
    },

    Structure : {
        description : ["An HTTP request consists of the following components:"],

        Rq_Line : {
            description : "Contains the HTTP method, the path of the resource, and the HTTP version."
        },
        Headers : {
            description : "Provide additional information about the request (e.g., content type, cookies, authentication)."
        },
        Body : {
            description : "Used to send data to the server, typically for POST, PUT, or PATCH requests."
        }
    },

    Url : {
            description : ["The Uniform Resource Locator(URL) specifies the address of the resource being requested.","It includes the protocol (e.g., http://, https://), the domain name or IP address of the server, and the path to the resource."]
        },
    Headers : {
            description : ["HTTP headers provide additional information about the request. Some common headers include:"],
    
            Content_Type : {
                description : " Specifies the format of the data being sent or received (e.g., application/json, text/html)."
            },
            Authorization : {
                description : "Used for authentication and authorization purposes."
            },
            User_Agent : {
                description : "Identifies the client making the request (e.g., the web browser)."
            }
        },
    Query_Param: {
            description : ["Query parameters are used to send additional data in the URL itself.","They are specified after a '?' character and separated by '&'.","For example: https://example.com/search?q=term&page=2."]
        },
    Request_body : {
            description : "For requests like POST, PUT, or PATCH, the request body carries data to be sent to the server. The body can be in various formats, such as JSON, XML, or plain text."
        },
    Response : {
            description : "After the server receives an HTTP request, it processes it and sends back an HTTP response. The response typically includes a status code, headers, and a response body."
        },
    Status_Codes : {
            description : ["Status codes indicate the outcome of an HTTP request."," Some common status codes are:"],
    
           "Code200" : {
                stat : "OK",
                description : "This status code indicates that the request was successful, and the server has returned the requested resource. It is the standard response for successful GET requests."
            },
            "Code201" : {
                stat : "Created",
                description : "This status code indicates that the request has been successfully fulfilled, and a new resource has been created as a result. It is often used in response to POST requests when a new resource is created on the server."
            },
            "Code204" : {
                stat : "No Content",
                description : "This status code indicates that the server has successfully processed the request, but there is no content to send back as the response. It is often used for DELETE or PUT requests when the server does not need to return any additional information."
            },
            "Code400" : {
                stat : "Bad Request",
                description : "This status code indicates that the server cannot understand or process the client's request due to malformed syntax, invalid parameters, or other client-side errors."
            },
            "Code401" : {
                stat : "Unauthorized",
                description : "This status code indicates that the request requires user authentication. The client must provide valid credentials (such as a username and password) to access the requested "
            },
            "Code403" : {
                stat : "Forbidden",
                description : "This status code indicates that the server understood the request but refuses to fulfill it. The client does not have sufficient permissions to access the requested resource."
            },
           "Code404" : {
                stat : "Not Found",
                description : "This status code indicates that the requested resource could not be found on the server. It is commonly used when a URL or endpoint does not exist or when a resource has been moved or deleted."
            },
            "Code500" : {
                stat : "Internal Server Error",
                description : "This status code indicates that an unexpected error occurred on the server while processing the request. It indicates a server-side problem that prevented the request from being fulfilled."
            },
            "Code503" : {
                stat : "Service Unavailable",
                description : "This status code indicates that the server is temporarily unable to handle the request. It may be due to server overload, maintenance, or other transient issues."
            },
    },
    para3 : "HTTP requests form the foundation of communication between clients and servers on the web. They enable the retrieval and transmission of data, making it possible for web applications and services to function."
}