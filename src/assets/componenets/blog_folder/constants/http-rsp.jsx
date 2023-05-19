export const http_rs_text = {
    para1 : "HTTP (Hypertext Transfer Protocol) responses are the server's way of replying to an HTTP request made by a client (such as a web browser). When a server receives an HTTP request, it processes it and generates an HTTP response, which contains information about the outcome of the request and the data being sent back to the client.",
    para2 : "Some basics of HTTP responses:",
    

    Structure : {
        description : ["An HTTP responnse consists of the following components:"],

        Status_Line : {
            description : "Contains the HTTP version, a three-digit status code, and a brief textual description of the status."
        },
        Headers : {
            description : "Provide additional information about the response (e.g., content type, cache control, cookies)."
        },
        Body : {
            description : "Contains the actual data being sent back to the client, such as HTML, JSON, images, etc."
        }
    },

  
    Headers : {
            description : ["HTTP response headers provide additional information about the response.","Some common headers include:"],
    
            Content_Type : {
                description : "Specifies the format of the data in the response (e.g., application/json, text/html)."
            },
            Content_Length : {
                description : "Indicates the size of the response body in bytes."
            },
            Cache_Control : {
                description : "Controls caching behavior of the response."
            },
            Set_Cookie : {
                description : "Sets a cookie on the client's browser for future requests."
            }
        },
    
    Response_body : {
            description : ["The response body carries the actual data being sent back to the client.","The format and content of the body depend on the nature of the request and the server's response. It can contain HTML content, JSON data, images, files, or any other type of data."]
        },
    
    Status_Codes : {
            description : ["Status codes indicate the outcome of an HTTP request. They are represented by three-digit numbers.","Some common status code categories are:"],
    
           "Code1xx" : {
                stat : "Informational",
                description : "Status codes in the 1xx range indicate provisional responses, providing informational messages about the request status. Examples: 100(Continue), 101(Switching Protocols)"
            },
            "Code2xx" : {
                stat : "Success",
                description : "Status codes in the 2xx range indicate successful responses, meaning the request was received, understood, and processed successfully. Examples: 200(OK), 201(Created),204(No Content)"
            },
            "Code3xx" : {
                stat : "Redirection",
                description : "Status codes in the 3xx range indicate that the client must take additional steps to complete the request, often involving redirection to a different URL. Examples: 301(Moved Ppermanently), 302(Found), 304(Not Modified)"
            },
            "Code4xx" : {
                stat : "Client Error",
                description : "Status codes in the 4xx range indicate errors caused by the client's request, such as invalid parameters or authentication issues. Examples: 400(Bad Request),401(Unauthorized),404 (Not Found)"
            },
            "Code5xx" : {
                stat : "Server Error",
                description : "Status codes in the 5xx range indicate errors caused by server-side issues. These errors indicate that the server failed to fulfill a valid request. Examples: 500(Internal Server Error), 503(Service Unavailable)"
            }
            
    },

    Redirects : {
        description : ["If the server responds with a redirect status code (3xx), it may include a new URL in the response headers.","The client should then make a new request to the provided URL to retrieve the desired resource."]
    },
    para3 : "HTTP responses are crucial for conveying information and data from the server to the client. They allow web applications to send back the requested resources, provide feedback on the request's success or failure, and control caching behavior and other important aspects of the client-server interaction."
}