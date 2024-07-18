function escapeXml(unsafe) {
  return unsafe
    .replace(/[<>&'"]/g, function (c) {
      switch (c) {
        case '<':
          return '&lt;'
        case '>':
          return '&gt;'
        case '&':
          return '&amp;'
        case "'":
          return '&apos;'
        case '"':
          return '&quot;'
      }
    })
    .replace(/\n/g, '&lt;br&gt;')
    .replace(/\r/g, '&lt;br&gt;')
}
export const getSimplifiedForm = async (details) => {
  const mediaType = details?.media?.[0]?.type
  const htmlContent = escapeXml(details?.content)

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
                    <data id="${
                      details?.name
                    }_id_${new Date().valueOf()}" version="1">
                        <application_process>
                            <mobilePhone/>
                            ${
                              mediaType === 'application/pdf'
                                ? '<display_document/>'
                                : mediaType === 'video/mp4'
                                ? '<display_video1/>'
                                : details?.media?.length > 0
                                ? '<display_image/>'
                                : '<content/>'
                            }
                        </application_process>
                        <meta>
                            <instanceID/>
                        </meta>
                    </data>
                </instance>
                <bind nodeset="/data/application_process/mobilePhone" type="string"/>

                ${
                  mediaType === 'application/pdf'
                    ? `<bind nodeset="/data/application_process/display_document" type="text" required="true()" odk:stylingTags="file" odk:caption="${htmlContent}"/>`
                    : mediaType === 'video/mp4'
                    ? `<bind nodeset="/data/application_process/display_video1" type="text" required="true()" odk:stylingTags="video" odk:caption="${htmlContent}"/>`
                    : details?.media?.length > 0
                    ? `<bind nodeset="/data/application_process/display_image" type="string" required="true()" odk:stylingTags="image" odk:caption="${htmlContent}"/>`
                    : `<bind nodeset="/data/application_process/content" type="string" required="true()"/>`
                }
                <bind nodeset="/data/meta/instanceID" type="string" readonly="true()" jr:preload="uid"/>
            </model>
        </h:head>
        <h:body>
            <group ref="/data/application_process">
                <label>Flow Selection</label>
                ${
                  mediaType === 'application/pdf'
                    ? `<input ref="/data/application_process/display_document">
    <label>{${details?.media?.[0]?.name}}</label>
    </input>`
                    : mediaType === 'video/mp4'
                    ? `<input ref="/data/application_process/display_video1">
    <label>{${details?.media?.[0]?.name}}</label>
    </input>`
                    : details?.media?.length > 0
                    ? `<input ref="/data/application_process/display_image">
    <label>${details?.media?.[0]?.name}</label>
    </input>`
                    : `<input ref="/data/application_process/content">
    <label>${htmlContent}</label>
    </input>`
                }
            </group>
        </h:body>
    </h:html>`

  console.log(xmlString)
  const file = await new File([xmlString], `${details?.name}.xml`, {
    type: 'application/xml',
  })
  const url = URL.createObjectURL(file)

  const a = document.createElement('a')
  a.href = url
  a.download = file.name
  document.body.appendChild(a)
  a.click()

  // Cleanup: remove the element and revoke the URL after download
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
  return file
}
