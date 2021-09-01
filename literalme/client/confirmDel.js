Template.confirmDel.events({
    'click .js-confirmDel'(event){
        let myID = $("#confirmID").val();
      
        $('#deleteModal').modal('hide');
        //Delete permanently
        newBooksdb.remove({_id: myID});
    }
});