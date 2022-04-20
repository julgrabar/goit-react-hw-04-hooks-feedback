import PropTypes from "prop-types";
import { StyledSection } from "./Section.styled";

export const Section = ({title, children }) => (
    <StyledSection>
        {title && <h2>{title}</h2>}

        {children}
    </StyledSection>
)

Section.propTypes ={
    title : PropTypes.string.isRequired,
    children: PropTypes.any,
}