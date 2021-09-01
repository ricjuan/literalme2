Template.editBooks.events({
    'click .js-saveEdit'(event){
        let editID = $("#editID").val();
        let editImg = $('#editImg').val();
        let editbTitle = $('#editTitle').val();
        let editbAuthor = $('#editAuthor').val();
        let editbDescription = $('#editDescription').val();
        
        newBooksdb.update({_id: editID},
            {$set:{
                'bPic': editImg,
                'bTitle': editbTitle,
                'bAuthor': editbAuthor,
                'bDescription': editbDescription
            }}
        );
        $('#editModal').modal('hide');
    }
});