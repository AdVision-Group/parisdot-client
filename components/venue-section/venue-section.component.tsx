// Utils
import React from "react"
import styled from "styled-components"

// Components
import Button from "../button/button.component"
import Image from "next/image"

// Hooks
import { useTransform, useViewportScroll, motion } from "framer-motion"

const VenueSection: React.FC = () => {
	const { scrollYProgress } = useViewportScroll()
	const transformVe = useTransform(scrollYProgress, [0, 1], [0, 120])
	const transformNUE = useTransform(scrollYProgress, [0, 1], [0, -85])

	return (
		<SectionContainer>
			<ImageContainer>
				<Image
					src="/assets/venue-section/ilu.png"
					alt="conf ilu"
					objectFit="contain"
					layout="responsive"
					width={100}
					height={100}
				/>
			</ImageContainer>
			<GridContainer>
				<Title
					style={{
						x: transformVe,
					}}
				>
					VE
				</Title>
				<ContentContainer>
					<h3>The Arab World Institute</h3>
					<p>
						was designed to create strong and durable cultural ties while
						cultivating constructive dialogue between the Arab World, France,
						and Europe. Since its creation it has become a place of cultural
						exchange in Paris but also an interlocutor in the field of
						mathematics and research.
					</p>
					<a
						rel="noopener noreferrer"
						target="_blank"
						href="https://goo.gl/maps/SdJsiFNCFe38ZAHM6"
					>
						<Button>VIEW IN MAPS</Button>
					</a>
				</ContentContainer>
				<Title
					style={{
						x: transformNUE,
					}}
				>
					NUE
				</Title>
			</GridContainer>
			<SquareContainer>
				<Image
					src="/assets/venue-section/square.svg"
					alt="square"
					objectFit="contain"
					layout="responsive"
					width={100}
					height={100}
				/>
			</SquareContainer>
		</SectionContainer>
	)
}

export default VenueSection

const Title = styled(motion.h2)``

const SectionContainer = styled.section`
	scroll-margin-top: 20rem;
	position: relative;
	flex: none;
	width: 100%;
	z-index: 99;
	/* height: 100vh; */
	/* overflow: hidden; */
	max-width: 145rem;
	margin: 22rem auto 5rem;
	overflow: unset !important;
	overflow-x: hidden;
	padding: 0rem 1.5rem;

	color: ${({ theme }) => theme.fonts.primary};
	/* border: 1px solid yellow; */
	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		margin: 20rem auto 10rem;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			margin: 20rem auto 10rem;

			/* @media all and (min-width: ${({ theme }) => theme.breakpoints.xxl}) {
				align-items: center;
			} */
		}
	}
`

const ImageContainer = styled.figure`
	position: absolute;
	width: 30rem;
	top: -10rem;
	right: 1.5rem;
	z-index: -1;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		width: 50rem;
		top: 15%;
		right: 10%;
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			right: 20%;
		}
	}
`
const SquareContainer = styled.figure`
	position: absolute;
	width: 10rem;
	bottom: 1.5rem;
	left: -1.5rem;
	z-index: -1;

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		display: none;
	}
`

const GridContainer = styled.div`
	display: grid;
	grid-template-columns: auto 1fr;
	gap: 1.5rem;
	max-width: 130rem;
	margin: 0 auto;

	h2 {
		font-size: 7rem;
		font-weight: 400;

		&:nth-child(1) {
			margin-left: 0rem;
			line-height: 1;
			grid-column: 1 / 2;
		}
		&:nth-child(3) {
			line-height: 0.6;
			grid-column: 2 / 3;
			/* grid-row: 1 / 2; */
			grid-row: 4 / 5;
			justify-self: end;
		}
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		grid-template-columns: 1fr 1fr;
		h2 {
			font-size: 18rem;

			&:nth-child(1) {
				grid-column: 1 / 3;
				margin-left: 4rem;
			}
			&:nth-child(3) {
				grid-row: unset;
				grid-column: unset;
			}
		}
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			h2 {
				font-size: 24rem;

				&:nth-child(1) {
					margin-left: 12rem;
				}
				&:nth-child(3) {
				}
			}
		}
	}
`

const ContentContainer = styled.div`
	background-color: ${({ theme }) => theme.background.container};
	align-self: start;
	padding: 2rem 1.5rem;
	grid-column: 1 / 3;
	grid-row: 3 / 4;
	/* max-width: 52rem; */

	h3 {
		font-size: 1.8rem;
		font-weight: 600;
		margin-bottom: 1rem;
		text-transform: uppercase;
	}

	p {
		font-size: 1.5rem;
		line-height: 1.5;
		margin-bottom: 2rem;
	}

	@media all and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		padding: 4rem 3rem;
		grid-column: unset;
		grid-row: unset;
		h3 {
			font-size: 2rem;
		}

		p {
			font-size: 1.6rem;
		}
		@media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
			h3 {
				font-size: 2.5rem;
			}

			p {
				font-size: 1.8rem;
			}
		}
	}
`
