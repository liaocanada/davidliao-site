# Welcome!
This is my personal website, hosted at [davidliao.ca](davidliao.ca).

It includes some basic information about myself and some demos of my projects. Don't forget to check out my resume as well, [resume.davidliao.ca](resume.davidliao.ca)! 

### Some technical details
This was originally a Spring/Thymeleaf web application, created back when Java was all that I knew (link to [that repo](https://github.com/liaocanada/davidliao-site-server)). That repo also has some Terraform and Ansible IaC to simplify infrastructure management and deployment.

I've now converted it into a React app (So, much of the stuff is still in HTML rather than React components! Also still using Bootstrap 3). It's hosted statically on AWS S3/CloudFront, without need for a server. Routing is achieved on the client-side using React-Router.

To redeploy changes, use `npm run build && npm run deploy`. The npm script will update the S3 bucket and create a CloudFront invalidation.
