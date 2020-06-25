import colors from './colorPallete';

const defaultStyles = {
  formElement: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },

  text: {
    fontFamily: 'ruluko',
    fontSize: 14,
  },

  input: {
    fontFamily: 'ruluko',
    fontSize: 16,
    borderWidth: 1,
    width: '100%',
    maxWidth: 290,
    height: 42,
    color: colors.darkColor,
    borderRadius: 6,
    padding: 12,
  },

  button: {
    width: 280,
    maxWidth: 290,
    height: 42,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
};

export default defaultStyles;
