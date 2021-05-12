# Strapi Provider Email GC Notify

Strapi email provider for the UK and Canadian Gov Notify notification service

## Prerequisites

You need to have the plugin `strapi-plugin-email` installed in your Strapi project.

## Installation

```bash
# using yarn
yarn add strapi-provider-email-gcnotify

# using npm
npm install strapi-provider-email-gcnotify --save
```

## Configuration

Follow the example below to integrate this provider with Strapi 

### Variables

`providerOptions.apiKey`: The Notify API key needed to authorize requests. See [API Integration documentation](https://documentation.notification.canada.ca/en/start.html) for more details.

`providerOptions.apiUrl`: The base url for the Notify service.

`providerOptions.templateId`: The ID of the email template to use

`providerOptions.subjectVariableName`: The name of the variable which will set the subject

`providerOptions.bodyVariableName`: The name of the variable which will set the body of the email

`providerOptions.emailReplyToId`: The id of the email to set the reply to field``


### Example

**Path -** `config/plugins.js`

```js
module.exports = ({ env }) => ({
  // ...
  email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: env('GC_NOTIFY_API_KEY'),
      apiUrl: env('GC_NOTIFY_API_URL'),
      templateId: env('GC_NOTIFY_TEMPLATE_ID'),
      subjectVariableName: "subject",
      bodyVariableName: "body",
      emailReplyToId: env("GC_NOTIFY_EMAIL_REPLY_TO_ID"),
    },
  },
  // ...
});
```