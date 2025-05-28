angular.module('Mental Activity Cards', [])

	/*The master controller*/
	.controller('master', ($scope, $sce) => {
		m = $scope

		//Trust a string as renderable HTML
		m.trustAsHTML = $sce.trustAsHtml

		m.print = () => {
			print()
		}

		m.reload = () => {
			if (confirm("Are you sure you want to reset the activity? You will lose any changes you have made if you proceed.")) {
				location.reload()
			}
		}

		m.cards = [
			{
				title: `Deciding`,
				description: `Debating what to do, what is for the best`,
				image: `pexels-mizunokozuki-12911860.jpg`,
				colour: `#eb7c31`,
				authorToReference: "(Archer, 2003)",
				references: "Archer, M.S. (2003). <i>Structure, agency, and the internal conversation.</i> Cambridge University Press."
			},
			{
				title: `Re-living`,
				description: `Some event, period or relationship`,
				image: `pexels-ron-lach-9849635.jpg`,
				colour: `#a5a5a5`,
				authorToReference: "(Archer, 2003)",
				references: "Archer, M.S. (2003). <i>Structure, agency, and the internal conversation.</i> Cambridge University Press."
			},
			{
				title: `Prioritising`,
				description: `Working out what matter most, next, or at all to you`,
				image: `pexels-mikhail-nilov-6592364.jpg`,
				colour: `#fd0000`,
				authorToReference: "(Archer, 2003)",
				references: "Archer, M.S. (2003). <i>Structure, agency, and the internal conversation.</i> Cambridge University Press."
			},
			{
				title: `Clarifying`,
				description: `Sorting out what you think about some issue, person or problem`,
				image: `clarifying-v2.jpg`,
				colour: `#a8cf8d`,
				authorToReference: "(Archer, 2003)",
				references: "Archer, M.S. (2003). <i>Structure, agency, and the internal conversation.</i> Cambridge University Press."
			},
			{
				title: `Imagining`,
				description: `The future, including ‘what would happen if…”`,
				image: `pexels-bertellifotografia-1830252.jpg`,
				colour: `#6f309f`,
				authorToReference: "(Archer, 2003)",
				references: "Archer, M.S. (2003). <i>Structure, agency, and the internal conversation.</i> Cambridge University Press."
			},
			{
				title: `Imaginary Conversations`,
				description: `Held with people known to you or whom you know of`,
				image: `imaginary-conversations-v2.png`,
				colour: `#00afee`,
				authorToReference: "(Archer, 2003)",
				references: "Archer, M.S. (2003). <i>Structure, agency, and the internal conversation.</i> Cambridge University Press."
			},
			{
				title: `Budgeting`,
				description: `Estimating whether or not you can afford to do something in terms of money, time or effort`,
				image: `pexels-cottonbro-3943723.jpg`,
				colour: `#fdbe00`,
				authorToReference: "(Archer, 2003)",
				references: "Archer, M.S. (2003). <i>Structure, agency, and the internal conversation.</i> Cambridge University Press."
			},
			{
				title: `Planning`,
				description: `The day, the week or much longer ahead.`,
				image: `pexels-n-voitkevich-8927463.jpg`,
				colour: `#4371c2`,
				authorToReference: "(Archer, 2003)",
				references: "Archer, M.S. (2003). <i>Structure, agency, and the internal conversation.</i> Cambridge University Press."
			},
			{
				title: `Rehearsing`,
				description: `Practicing what you will say or do`,
				image: `rehearsing-v2.png`,
				colour: `#d2349e`,
				authorToReference: "(Archer, 2003)",
				references: "Archer, M.S. (2003). <i>Structure, agency, and the internal conversation.</i> Cambridge University Press."
			},
			{
				title: `Mulling Over`,
				description: `Dwelling upon a problem, a situation or a relationship.`,
				image: `mulling-over.png`,
				colour: `#538135`,
				authorToReference: "(Archer, 2003)",
				references: "Archer, M.S. (2003). <i>Structure, agency, and the internal conversation.</i> Cambridge University Press."
			},
			{
				title: `Knowing`,
				description: `“Knowing” what the right thing to do is.`,
				image: `pexels-supushpitha-1736222.jpg`,
				colour: `#8d0000`,
				authorToReference: "(Munro, 2023)",
				references: "Munro, D. (2023). <i>How are women with unpaid caring responsibilities making decisions making decisions about higher education study?</i> [Doctoral dissertation, Queensland University of Technology]"
			},
			{
				title: `Considering`,
				description: `Taking into account the experiences of others.`,
				image: `pexels-bertellifotografia-7510729.jpg`,
				colour: `#4ff2fa`,
				authorToReference: "(Munro, 2023)",
				references: "Munro, D. (2023). <i>How are women with unpaid caring responsibilities making decisions making decisions about higher education study?</i> [Doctoral dissertation, Queensland University of Technology]"
			},
			{
				title: `Comparing`,
				description: `Weighing your own experience alongside the experience of another person.`,
				image: `pexels-olia-danilevich-8145356.jpg`,
				colour: `#caeafd`,
				authorToReference: "(Munro, 2023)",
				references: "Munro, D. (2023). <i>How are women with unpaid caring responsibilities making decisions making decisions about higher education study?</i> [Doctoral dissertation, Queensland University of Technology]"
			},
			{
				title: `Weighing up`,
				description: `Best case/worst case scenarios.`,
				image: `pexels-thirdman-8012227.jpg`,
				colour: `#d0b0df`,
				authorToReference: "(Munro, 2023)",
				references: "Munro, D. (2023). <i>How are women with unpaid caring responsibilities making decisions making decisions about higher education study?</i> [Doctoral dissertation, Queensland University of Technology]"
			},
			{
				title: `Downplaying`,
				description: `Minimising experiences and expectations.`,
				image: `downplaying.png`,
				colour: `#c1cec0`,
				authorToReference: "(Munro, 2023)",
				references: "Munro, D. (2023). <i>How are women with unpaid caring responsibilities making decisions making decisions about higher education study?</i> [Doctoral dissertation, Queensland University of Technology]"
			},
			{
				title: `Praying`,
				description: `Talking with God about the issue before you.`,
				image: `praying-v2.jpg`,
				colour: `#9898fd`,
				authorToReference: "(Munro, 2023)",
				references: "Munro, D. (2023). <i>How are women with unpaid caring responsibilities making decisions making decisions about higher education study?</i> [Doctoral dissertation, Queensland University of Technology]"
			},
			{
				title: `Meditating`,
				description: `Considering future options in the light of one’s faith and spiritual calling.`,
				image: `meditating.png`,
				colour: `#b3c5e5`,
				authorToReference: "(Munro, 2023)",
				references: "Munro, D. (2023). <i>How are women with unpaid caring responsibilities making decisions making decisions about higher education study?</i> [Doctoral dissertation, Queensland University of Technology]"
			},
			{
				title: `Worrying`,
				description: `Feeling anxious/concerned about present and future plans.`,
				image: `pexels-mikhail-nilov-7534778.jpg`,
				colour: `#998fc0`,
				authorToReference: "(Munro, 2023)",
				references: "Munro, D. (2023). <i>How are women with unpaid caring responsibilities making decisions making decisions about higher education study?</i> [Doctoral dissertation, Queensland University of Technology]"
			},
			{
				title: `Procrastinating`,
				description: `Putting off taking action/making decisions..`,
				image: `pexels-anntarazevich-6173669.jpg`,
				colour: `#b76be0`,
				authorToReference: "(Munro, 2023)",
				references: "Munro, D. (2023). <i>How are women with unpaid caring responsibilities making decisions making decisions about higher education study?</i> [Doctoral dissertation, Queensland University of Technology]"
			},
			{
				title: `Validating`,
				description: `Mentally affirming that your judgement is sound and that your decisions, feelings and/or actions are justified.`,
				image: `validating-v2.png`,
				colour: `#88c0c3`,
				authorToReference: "(Munro, 2023)",
				references: "Munro, D. (2023). <i>How are women with unpaid caring responsibilities making decisions making decisions about higher education study?</i> [Doctoral dissertation, Queensland University of Technology]",
			},
		]

		m.showCard = (card) => {
			m.$root.card = card
			m.$root.modalActive = true
			m.$applyAsync()

		}

		m.hideCard = () => {
			m.$root.modalActive = false
			m.$applyAsync()

			setTimeout(() => {
				m.$root.card = null
				m.$applyAsync()

			}, 360)
		}

		m.showInstructions = () => {
			m.showCard({
				title: `Instructions`,
				page: `instructions`,
			})
		}

		m.showAcknowledgements = () => {
			m.showCard({
				title: `Acknowledgements`,
				page: `acknowledgements`,
			})
		}

		m.showResources = () => {
			m.showCard({
				title: `References`,
				page: `references`,
			})
		}

		m.setModeToSorting = () => {
			m.$root.mode = 'sorting'
			setTimeout(() => {
				m.$root.hideCardImages = true
				m.$applyAsync()
			}, 200)
		}

		setTimeout(() => $(".css-transitions-only-after-page-load").removeClass("css-transitions-only-after-page-load"), 10);

	})

	/*Turns off the ng-scope, et al. debug classes*/
	.config([
		'$compileProvider', ($compileProvider) => {
			$compileProvider.debugInfoEnabled(false)
		}
	])



	/*draggable*/
	.directive('draggableCards', () => {
		return {
			restrict: 'A',
			scope: true,
			link: (scope, element, attrs) => {

				m.swappable = new Draggable.Sortable(document.querySelectorAll('.sorting-column-dropzone,.cards'), {
					draggable: '.card',
					handle: '.fa-arrows',
					sortAnimation: {
						duration: 360,
						easingFunction: 'ease-in-out',
					},
					classes: {
						'draggable:invalid': 'invalid-drop-zone'
					},
					plugins: [Draggable.Plugins.SortAnimation],
				})
			}
		}
	})

/*Sample directive*/
/*.directive('sampleDirective', () => {
	return {
		restrict: 'A',
		scope: true,
		link: (scope, element, attrs) => {

		}
	}
})*/