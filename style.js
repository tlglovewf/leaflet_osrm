const greenHtmlStyles = `
                                background-color: #11ee70;
                                width: 2rem;
                                height: 2rem;
                                display: block;
                                left: -1rem;
                                top: -1rem;
                                position: relative;
                                border-radius: 3rem 3rem 0;
                                transform: rotate(45deg);
                                border: 1px solid #FFFFFF`;

        const greenIcon = L.divIcon({
                className: "my-custom-pin",
                iconAnchor: [0, 24],
                labelAnchor: [-6, 0],
                popupAnchor: [0, -36],
                html: `<span style="${greenHtmlStyles}" />`
        });

        const blueHtmlStyles = `
                                background-color: #1107ee;
                                width: 2rem;
                                height: 2rem;
                                display: block;
                                left: -1rem;
                                top: -1rem;
                                position: relative;
                                border-radius: 3rem 3rem 0;
                                transform: rotate(45deg);
                                border: 1px solid #FFFFFF`;

        const blueIcon = L.divIcon({
                className: "my-custom-pin",
                iconAnchor: [0, 24],
                labelAnchor: [-6, 0],
                popupAnchor: [0, -36],
                html: `<span style="${blueHtmlStyles}" />`
        });

        const redHtmlStyles = `
                                background-color: #ee1107;
                                width: 2rem;
                                height: 2rem;
                                display: block;
                                left: -1rem;
                                top: -1rem;
                                position: relative;
                                border-radius: 3rem 3rem 0;
                                transform: rotate(45deg);
                                border: 1px solid #FFFFFF`;

        const redIcon = L.divIcon({
                className: "my-custom-pin",
                iconAnchor: [0, 24],
                labelAnchor: [-6, 0],
                popupAnchor: [0, -36],
                html: `<span style="${redHtmlStyles}" />`
        });