angularTimeAgo
==============

An angular directive to replace a date value with a readable time-ago variant in the form of "X days / hours / minutes ago".

## Usage

Add the timeAgo.js file to your project and include it as an app dependency. Then you can add the attribute e.g. `time-ago="comment.date"` to display the time-ago string.

```javascript
var app = angular.module('YourApp', [
  'angularTimeAgo'
]);
```

```html
<div ng-repeat="comment in comments | orderBy : '-created'">
  <div class="comment-meta" title="Posted on {{ comment.created }}">
      <a href="#/users/{{ comment.author._id }}">
        {{ comment.author.name }}
      </a>

      <span time-ago="comment.created"></span>
  </div>

  <p>{{ comment.text }}</p>
</div>
```