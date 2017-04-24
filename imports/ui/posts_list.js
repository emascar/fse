import { Template } from 'meteor/templating';
import './posts_list.html';

  Template.postsList.helpers({
    posts: function() {
        return Posts.find();
    }
  });
