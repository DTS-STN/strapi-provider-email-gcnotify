"use strict";

const notify = require("notifications-node-client");

module.exports = {
  init: (providerOptions = {}, settings = {}) => {
    const notifyClient = new notify.NotifyClient(
      providerOptions.apiUrl,
      providerOptions.apiKey
    );
    const {
      templateId,
      subjectVariableName,
      bodyVariableName,
      emailReplyToId,
    } = providerOptions;
    return {
      send: (options) => {
        return new Promise(() => {
          const { to, text, subject } = options;
          return notifyClient.sendEmail(templateId, to, {
            personalization: {
              [subjectVariableName]: subject,
              [bodyVariableName]: text,
            },
            emailReplyToId: emailReplyToId,
          });
        });
      },
    };
  },
};
