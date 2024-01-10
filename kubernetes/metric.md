- Customers HTTP Requests Dashboard
 - http_server_requests_seconds_count -> uri -> api/v1/customers
 <!-- when user successfully signs up -->
 <!-- When user successfully reaches that endpoint uri -->
 - http_server_requests_seconds_sum -> uri -> api/v1/auth/login
 <!-- When user successfully logs in -->
 <!--  When user tries to login with invalid credentials-->

- Spring Auth Dashboard
    - spring_security_http_secured_requests_seconds_count
     <!--Count of secured requests made to backend server pod -->
     <!-- Alert to increase pods when server threshold is reached -->
    - spring_security-authorisation_seconds_count ->spring_security_authorisation_type -> UsernamePasswordAuthenticationToken
    <!-- When user details are updated -->
    - spring_security-authorisation_seconds_count ->spring_security_object -> request
    <!--  amount of request made to update customer details -->
    - spring_security_authorisation_seconds_count -> spring_security_authorisation_decision -> 
    <!-- User uses invalid/expired/deleted credentials -->
    - spring_security_authorisation_seconds_max -> spring_security_authentication_type -> UsernamePasswordAuthenticationToken
    <!-- Max duration of single authorisation -->
    - spring_security_authorisation_seconds_max -> spring_security_object -> request
    <!-- max time for request to process users with username&password authentication token to get access to secure endpoints -->
- RDS DB connection dashboard
    - hikaricp_connections -> pool -> HikariPool-1
    <!-- Minimum default for hikari to main idle connection to db is 10. -->
