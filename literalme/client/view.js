Template.viewBooks.events({
    'click .js-delete'(event){
        let myID = $("#deleteID").val();

        $('#deleteModal').modal('show');
    }
});