export const getSimplifiedForm = async (details) => {
    const xmlString = `<?xml version="1.0"?>
    <h:html
        xmlns="http://www.w3.org/2002/xforms"
        xmlns:h="http://www.w3.org/1999/xhtml"
        xmlns:ev="http://www.w3.org/2001/xml-events"
        xmlns:xsd="http://www.w3.org/2001/XMLSchema"
        xmlns:jr="http://openrosa.org/javarosa"
        xmlns:orx="http://openrosa.org/xforms"
        xmlns:odk="http://www.opendatakit.org/xforms">
        <h:head>
            <h:title>${details?.name}_title_${new Date().valueOf()}</h:title>
            <model odk:xforms-version="1.0.0">
                <instance>
                    <data id="${details?.name}_id_${new Date().valueOf()}" version="1">
                        <application_process>
                            <mobilePhone/>
                            ${details?.media?.length > 0 ? "<display_image/>" : "<content/>"}
                        </application_process>
                        <meta>
                            <instanceID/>
                        </meta>
                    </data>
                </instance>
                <bind nodeset="/data/application_process/mobilePhone" type="string"/>
                ${details?.media?.length > 0 ? `<bind nodeset="/data/application_process/display_image" type="string" required="true()" odk:stylingTags="image" odk:caption="${details?.content.replace(/"/g, '&quot;')}"/>` : `<bind nodeset="/data/application_process/content" type="string" required="true()"/>`}
                <bind nodeset="/data/meta/instanceID" type="string" readonly="true()" jr:preload="uid"/>
            </model>
        </h:head>
        <h:body>
            <group ref="/data/application_process">
                <label>Flow Selection</label>
                ${details?.media?.length > 0 ? `<input ref="/data/application_process/display_image">
                    <label>${details?.media?.[0]?.name}</label>
                </input>` : `<input ref="/data/application_process/content">
                    <label>${details?.content}</label>
                </input>`}
            </group>
        </h:body>
    </h:html>`;
    
    
    const file = await new File([xmlString], `${details?.name}.xml`, {
        type: "application/xml",
    });
    const url = URL.createObjectURL(file);

    const a = document.createElement("a");
        a.href = url;
        a.download = file.name;
        document.body.appendChild(a);
        a.click();

    // Cleanup: remove the element and revoke the URL after download
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  return file;
};


