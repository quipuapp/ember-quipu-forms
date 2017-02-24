import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('checkbox-for', 'Integration | Component | checkbox for', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{checkbox-for}}`);

  assert.ok(this.$("input[type='checkbox']").length,
            'renders a checkbox input');
});

test('works', function(assert) {
  this.set("something", Ember.Object.create());

  this.render(hbs`{{checkbox-for data=something field="foo"}}`);

  this.$("label").click();
  this.$("input").trigger("input");

  assert.ok(this.get("something.foo"));

  this.$("input").click();
  this.$("input").trigger("input");

  assert.notOk(this.get("something.foo"));
});