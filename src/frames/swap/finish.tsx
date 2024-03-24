import { CustomFrameContext } from '.'
import { backgroundStyles, warningStyles, titleStyles } from './styles'

export const finishScreen = (c: CustomFrameContext) => {
  return c.res({
    image: (
      <div style={backgroundStyles}>
        <span style={titleStyles}>For the culture of internet.</span>

        <span style={{ ...warningStyles, width: '75%' }}>
          Your transaction is being processed. This frame doesn't check for a
          successful execution
        </span>
      </div>
    ),
  })
}
