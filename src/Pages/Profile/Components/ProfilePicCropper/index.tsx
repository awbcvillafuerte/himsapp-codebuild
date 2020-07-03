import React from 'react'
import Avatar from 'react-avatar-edit'
// import AvatarEditor from 'react-avatar-editor'
import Dropzone from 'react-dropzone'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileUpload } from '@fortawesome/free-solid-svg-icons'
import { Grid, Button } from '@material-ui/core'

export const ImageCropper = (props: any) => {
    const {
        photo,
        classes,
        classes2,
        onUpoad,
        closeUploadModal,
        handleAccountPhoto,
        setPhoto
    } = props

    // const editor = React.useRef<any>(null)

    const onClose = () => {
        setPhoto(null)
    }
      
    const onCrop = (preview: any) => {
        setResult(preview)
    }
     
    const onBeforeFileLoad = (elem: any) => {
        if(elem.target.files[0].size > 71680){
          alert("File is too big!");
          elem.target.value = "";
        };
    }

    const [result, setResult] = React.useState(null)

    return (
        <>
            <Dropzone
                multiple={false}
                onDrop={(event) => {
                    // const base64 = getBase64(event)
                    handleAccountPhoto(event)
                }}>
                {({ getRootProps, getInputProps }) => (
                    <>
                        {
                            photo && photo !== null &&
                            <div>
                                <Avatar
                                    width={390}
                                    height={295}
                                    onCrop={onCrop}
                                    onClose={onClose}
                                    onBeforeFileLoad={onBeforeFileLoad}
                                    src={photo} />
                            </div>
                        }
                        {
                            !photo && photo === null &&
                             <section {...getRootProps({ className: `dropzone ${classes.dropzone}` })}>
                                <div >
                                    <input {...getInputProps()}
                                    />
                                    <div className={classes2.centerDrop}>
                                        <FontAwesomeIcon
                                            style={{ opacity: 0.56 }}
                                            icon={faFileUpload}
                                            color='#272E4C'
                                            size='2x' />
                                        <div className={classes2.centerDropLabels}>
                                            <span className={classes2.centerDropLabel}>Drag or drop file.</span>
                                            <span className={classes2.centerDropLabel}>.jpg or .png</span>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        }
                    </>
                )}
            </Dropzone>
            <Grid container spacing={3} style={{marginTop: '20px'}}>
                <Grid item xs={6} style={{textAlign: 'right'}}>
                    <Button
                        className={classes2.cancelButton}
                        variant="outlined"
                        color="secondary"
                        onClick={closeUploadModal}>
                        Cancel
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button
                        disabled={photo && photo !== null && result && result !== null ? false : true}
                        onClick={() => onUpoad(result)}
                        className={classes2.saveButton}
                        variant="contained"
                        color="primary">
                        Upload
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}