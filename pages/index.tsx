// Types
import type { NextPage } from "next"

// Utils
import React from "react"
import styled from "styled-components"

// Components
import Head from "next/head"
// import Link from "next/link"
// import Image from "next/image"
import Header from "../components/header/header.component"
import HeroSection from "../components/hero-section/hero-section.component"
import AboutSection from "../components/about-section/about-section.component"
import EventSection from "../components/event-section/event-section.component"
import FooterSection from "../components/footer-section/footer-section.component"
import HackathonSection from "../components/hackathon-section/hackathon-section.component"
// import EventOverview from "../components/event-overview/event-overview.component"
// import WorkshopSection from "../components/workshop-section/workshop-section.component"
// import Accordion from "../components/accordion/accordion.component"
// import HackatonContentSection from "../components/hackaton-content-section/hackaton-content-section.component"
// import BountySection from "../components/bounties-section/bounties-section.component"
// import AftermovieSection from "../components/aftermovie-section/aftermovie-section.component"
// import PricepoolSection from "../components/pricepool-section/pricepool-section.component"

// Hooks
import { useRouter } from "next/router"
import { useMap } from "react-use"

// Data
import { events, hackatons } from "../utils/data"

// Icons
import { AiFillGithub } from "react-icons/ai"

const Home: NextPage = () => {
	const { push } = useRouter()

	const [event, { setAll }] = useMap({
		events: events.map((i, idx) => ({
			id: idx,
			showContent: false,
		})),
	})
	const [hackaton, { setAll: setAllHackathon }] = useMap({
		hackatons: hackatons.map((i, idx) => ({
			id: idx,
			showContent: false,
		})),
	})

	const openEventDayProgram = (
		showContent: boolean,
		i: number,
		dayID: string
	) => {
		setAll({
			...event,
			events: event.events.map((e, id) => {
				if (i === id) {
					return {
						id: id,
						showContent: showContent,
					}
				} else {
					return {
						id: id,
						showContent: e.showContent,
					}
				}
			}),
		})
		push(`/#${dayID}`)
	}
	const openHackathonDayProgram = (
		showContent: boolean,
		i: number,
		dayID: string
	) => {
		setAllHackathon({
			...event,
			hackatons: hackaton.hackatons.map((e, id) => {
				if (i === id) {
					return {
						id: id,
						showContent: showContent,
					}
				} else {
					return {
						id: id,
						showContent: e.showContent,
					}
				}
			}),
		})
		push(`/#${dayID}`)
	}

	return (
		<React.Fragment>
			<Head>
				{/* <!-- Primary Meta Tags --> */}
				<title>parisDOT Conf Hack</title>
				<meta name="title" content="parisDOT Conf Hack" />
				<meta
					name="description"
					content="4 days of conf & hack, organized by leading Polkadot projects for the broader crypto family. 4/20-23 in Amsterdam, the Netherlands."
				/>

				{/* <!-- Open Graph / Facebook --> */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://amsterdot.io/" />
				<meta property="og:title" content="parisDOT Conf Hack" />
				<meta
					property="og:description"
					content="4 days of conf & hack, organized by leading Polkadot projects for the broader crypto family. 4/20-23 in Amsterdam, the Netherlands."
				/>
				<meta
					property="og:image"
					content="https://res.cloudinary.com/coderkin/image/upload/v1648731047/amsterDOT/meta-v2_oq32v3.png"
				/>

				{/* <!-- Twitter --> */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://amsterdot.io/" />
				<meta property="twitter:title" content="parisDOT Conf Hack" />
				<meta
					property="twitter:description"
					content="4 days of conf & hack, organized by leading Polkadot projects for the broader crypto family. 4/20-23 in Amsterdam, the Netherlands."
				/>
				<meta
					property="twitter:image"
					content="https://res.cloudinary.com/coderkin/image/upload/v1648731047/amsterDOT/meta-v2_oq32v3.png"
				/>
			</Head>

			<Header
				openEventDayProgram={openEventDayProgram}
				openHackathonDayProgram={openHackathonDayProgram}
			/>

			<HeroSection />
			<AboutSection />
			<FooterSection />
			{/* <EventSection /> */}
			{/* <HackathonSection /> */}
			{/* <HackathonSection />
			<HackatonContentSection /> */}
			{/* <PricepoolSection /> */}
			{/* <BountySection />
			<AftermovieSection />
		*/}

			{/* <SectionContainer>
				{events.map((e, idx) => (
					<Accordion
						showContent={event.events[idx].showContent}
						openEventDayProgram={openEventDayProgram}
						openHackathonDayProgram={openHackathonDayProgram}
						key={idx}
						idx={idx}
						item={e}
						dayID={e.id}
					/>
				))}
			</SectionContainer> */}

			{/* <WorkshopSection />

			<SectionContainer>
				{hackatons.map((h, idx) => (
					<Accordion
						showContent={hackaton.hackatons[idx].showContent}
						openEventDayProgram={openEventDayProgram}
						openHackathonDayProgram={openHackathonDayProgram}
						key={idx}
						idx={idx}
						item={h}
						dayID={h.id}
						isWorkshop={true}
					/>
				))}
			</SectionContainer> */}

			<Footer>
				<a
					href="https://github.com/AdVision-Group/amsterdot-client"
					rel="noopener noreferrer"
					target="_blank"
				>
					<figure>
						<AiFillGithub />
					</figure>
				</a>
			</Footer>
		</React.Fragment>
	)
}

export default Home

const Footer = styled.footer`
	display: flex;
	justify-content: center;

	figure {
		color: ${({ theme }) => theme.color.primary};
		font-size: 3rem;
	}
`

const SectionContainer = styled.section`
	padding: 10rem 0;
`
