import React from 'react'
import styleFilterButtonsNewAndDownload from './FilterButtonsNewAndDownload.module.css'
import ButtonNewANT from './ButtonNewANT'
import ButtonDownloadANT from './ButtonDownloadANT'

const FilterButtonsNewAndDownload = () => {
  return (
    <div className={styleFilterButtonsNewAndDownload.buttons}>
        <ButtonNewANT></ButtonNewANT>
        <ButtonDownloadANT></ButtonDownloadANT>

    </div>
  )
}

export default FilterButtonsNewAndDownload