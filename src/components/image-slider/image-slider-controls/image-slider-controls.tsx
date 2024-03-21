import { SliderButton, SliderControlsType, SliderDots } from '@/components'

export const ImageSliderControls = ({
  imageIndex,
  images,
  isEditMode,
  isModified,
  setImageIndex,
}: SliderControlsType) => {
  const showControlButtons = images.length > 1

  const styles = {
    button: isModified && { right: '50%' },
    dots: isModified && { left: '25%' },
  }

  return (
    <>
      {showControlButtons && (
        <>
          <SliderButton
            images={images}
            isEditMode={isEditMode}
            position={'left'}
            setImageIndex={setImageIndex}
          />

          <SliderButton
            images={images}
            inlineStyle={styles.button}
            isEditMode={isEditMode}
            position={'right'}
            setImageIndex={setImageIndex}
          />

          <SliderDots
            imageIndex={imageIndex}
            images={images}
            inlineStyle={styles.dots}
            setImageIndex={setImageIndex}
          />
        </>
      )}
    </>
  )
}
