
export interface NavPassedProps {}

export interface NavPublicProps extends NavPassedProps {}

interface NavCalcedProps {
}

export interface NavProps extends NavPassedProps, NavCalcedProps {}
