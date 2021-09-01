import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core';

import './main.html';
import './view.html';
import './confirmDel.html';
import './editBooks.html';

import './main.js';
import './view.js';
import './confirmDel.js';
import './editBooks.js';
import '../lib/collection.js';


Template.mainBody.helpers({
    newBooks(){
        return newBooksdb.find();
    }
});

Template.mainBody.events({
    'click .js-view'(event){
        let myID = this._id;
        $("#deleteID").val(myID);
        $("#confirmID").val(myID);
        newBooksdb.update({_id:myID}, {$inc: {bView: 1}});
        let viewBooks = this.bView + 1;
        let bookImg = this.bPic;
        let bookTitle = this.bTitle;
        let bookAuthor = this.bAuthor;
        let bookDescription = this.bDescription;
        
        document.getElementById("viewImg").src = bookImg;
        $('#viewbookTitle').html("<h4>Title:&nbsp;</h4>"+bookTitle);
        $('#viewbookAuthor').html("<h4>Author:&nbsp;</h4>"+bookAuthor);
        $('#timesViewed').html("<h4>Views:&nbsp;</h4>"+viewBooks);
        $('#viewbookDescription').html("<h4>Description:&nbsp;</h4>"+bookDescription);
        $('#viewModal').modal('show');
    },
    'click .js-edit'(event){ 
        let myID = this._id; 
        $("#editID").val(myID);
        let editImg = this.bPic;    
        let editbTitle = this.bTitle;
        let editbAuthor = this.bAuthor;
        let editbDescription = this.bDescription;
        document.getElementById("editdisplayImg").src = editImg;
        $('#editImg').val(editImg);
        $('#editTitle').val(editbTitle);
        $('#editAuthor').val(editbAuthor);
        $('#editDescription').val(editbDescription);
        $('#editModal').modal('show');
        
    }    
});

Template.addBooks.events({
    'click .js-save'(event){
        //pulls data from the add books html page
        let newbPic = $('#bookImg').val();
        let newbTitle = $('#bookTitle').val();
        let newbAuthor = $('#bookAuthor').val();
        let newbDescription = $('#bookDescription').val();
        
        //save data into collection
        newBooksdb.insert({
            "bPic":newbPic,
            "bTitle":newbTitle,
            "bAuthor":newbAuthor,
            "bDescription":newbDescription,
            "bView":0
        });
        //Clear input boxes
        document.getElementById("bookImg").src = "book_stack.png";
        $('#bookTitle').val("");
        $('#bookAuthor').val("");
        $('#bookDescription').val("");
        $('#addModal').modal('hide');
    }
});
