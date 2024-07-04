import { createTheme } from '@mui/material/styles';
import _ from 'lodash'
import { esES } from '@mui/material/locale';
import baseTheme from './baseTheme';


export const theme = createTheme(
    _.merge({}, baseTheme, {
      direction: 'ltr',
    }),
    esES,
  );

  