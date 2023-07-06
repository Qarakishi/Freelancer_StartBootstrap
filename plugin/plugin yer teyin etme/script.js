<script>
        $(document).ready(function () {
            // $('#phone').inputmask('+(999)99  999 99 99');
            $("#email").inputmask("email");

            $('#phone').intlTelInput({
                initialCountry: "auto",
                geoIpLookup: function (callback) {
                    jQuery.get('https://ipinfo.io', function () { }, 'jsonp').always(function (resp) {
                        var countryCode = (resp && resp.country) ? resp.country : "";
                        callback(countryCode);
                    })
                },
                utilsScript: 'plugin/js/utils.js'
            });
        });
    </script>