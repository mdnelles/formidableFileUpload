
import $ from 'jquery'

export const upload = (DBname) => {
    return new Promise((resolve, reject) => {
        
        var data = new FormData();
        $.each($('#file')[0].files, function(i, file) {
            data.append('file-'+i, file);
        });

        $.ajax({
            url: 'http://localhost:5000/serv/upload',
            data: data,
            cache: false,
            contentType: false,
            processData: false,
            method: 'POST',
            type: 'POST', // For jQuery < 1.9
            error: function(err) {
                reject(err)
            },
            success: function(data) {
                resolve(data)
            }
        })
    })
}