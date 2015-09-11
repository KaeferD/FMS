
function updateStatus() {
    $.ajax({
        url: '',
        data: '',
        dataType: 'json',
        success: function(data, textStatus, jqXHR) {
            data.forEach(function(currentValue, index, array) {
                var vehicle = $('.vehicle-' + currentValue.id);
                var status = vehicle.find('.status').eq(0);
                var oldStatus = status.html();

                if (oldStatus != currentValue.status) {
                    if (currentValue.category.indexOf("BMA") > -1) {
                        // bma
                        if (vehicle.find('.status').hasClass('status--0') && currentValue.status != 0) {
                            status.switchClass('status--0', 'status--1');
                        }
                        if (vehicle.find('.status').hasClass('status--1') && currentValue.status != 1) {
                            status.switchClass('status--1', 'status--0');
                        }

                    } else {
                        // vehicle
                        status.html(currentValue.status);
                        status.switchClass('status--'+oldStatus, 'status--'+currentValue.status);
                    }
                }
            });
        }
    });
}

setInterval(updateStatus, 2000);
