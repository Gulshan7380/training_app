const TABLE_CONIGURATION = {
    'CONFIGURATION': [
        {
            name: 'SL No',
            defaultColumn: true,
            isVisible: true,
            accessor: 'index'
        },
        {
            name: 'Device ID',
            defaultColumn: true,
            isVisible: true,
            accessor: 'deviceID'
        },
        {
            name: 'IP Address',
            defaultColumn: false,
            isVisible: true,
            accessor: 'IPAddress'
        },
        {
            name: 'RAM Size',
            defaultColumn: false,
            isVisible: true,
            accessor: 'ramSize'
        },
        {
            name: 'Processor Type',
            defaultColumn: false,
            isVisible: false,
            accessor: 'ProcessorType'
        },
        {
            name: ' Network ID',
            defaultColumn: true,
            isVisible: true,
            accessor: 'networkID'
        },
        {
            name: 'OS Name',
            defaultColumn: false,
            isVisible: false,
            accessor: 'OSName'
        },
        {
            name: 'OS Licence',
            defaultColumn: false,
            isVisible: false,
            accessor: 'OSLicence'
        },
        {
            name: 'Microsoft LicenceID',
            defaultColumn: false,
            isVisible: false,
            accessor: 'MicrosoftLicenceID'
        },
        {
            name: 'Antivirus Name',
            defaultColumn: false,
            isVisible: false,
            accessor: 'AntivirusName'
        },
        {
            name: 'AntivirusLicence ID',
            defaultColumn: true,
            isVisible: true,
            accessor: 'AntivirusLicenceID'
        }
    ]
};

export default TABLE_CONIGURATION;