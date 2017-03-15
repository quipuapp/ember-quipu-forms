import Ember from 'ember';

const FormControl = Ember.Component.extend({
  intl: Ember.inject.service(),

  showErrors: false,

  classNames: "form-field",

  inputId: Ember.computed("elementId", {
    get() {
      return `${this.get("elementId")}-input`;
    }
  }),

  label: Ember.computed("data", "field", {
    get() {
      let modelName =
        this.get("data.content.constructor.modelName") ||
        this.get("data.constructor.modelName");

      if (!modelName) {
        return;
      }

      let fieldName = this.get("field");

      if (!fieldName) {
        return;
      }

      modelName = Ember.String.underscore(modelName);
      fieldName = Ember.String.underscore(fieldName);

      return this.get("intl").t(
        `models.attributes.${modelName}.${fieldName}`);
    }
  })
});

FormControl.reopenClass({
  positionalParams: ["field"]
});

export default FormControl;
