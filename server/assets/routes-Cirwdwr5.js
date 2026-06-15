import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, BookOpen, Bot, Brain, Code2, Github, Globe, HeartHandshake, Layers, Linkedin, Mail, MapPin, Palette, Phone, Rocket, Shield, Sparkles, Star, Stethoscope } from "lucide-react";
var beyond_borders_png_asset_default = {
	version: 1,
	asset_id: "910d36ec-2584-494c-92bb-6c44125c6efe",
	project_id: "11c5d6df-0ef6-47f4-b6f5-715d78b1069f",
	url: "/__l5e/assets-v1/910d36ec-2584-494c-92bb-6c44125c6efe/beyond-borders.png",
	r2_key: "a/v1/11c5d6df-0ef6-47f4-b6f5-715d78b1069f/910d36ec-2584-494c-92bb-6c44125c6efe/beyond-borders.png",
	original_filename: "beyond-borders.png",
	size: 871966,
	content_type: "image/png",
	created_at: "2026-06-15T16:28:06Z"
};
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function FloatingBlobs() {
	return /* @__PURE__ */ jsxs("div", {
		"aria-hidden": true,
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", { className: "absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-gradient-soft opacity-50 blur-3xl animate-float-slow" }),
			/* @__PURE__ */ jsx("div", {
				className: "absolute top-40 -right-32 h-[460px] w-[460px] rounded-full opacity-40 blur-3xl animate-float-slower",
				style: { background: "radial-gradient(circle, #D8B4FE 0%, transparent 70%)" }
			}),
			/* @__PURE__ */ jsx("div", {
				className: "absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full opacity-30 blur-3xl animate-float-slow",
				style: { background: "radial-gradient(circle, #F5D5E0 0%, transparent 70%)" }
			})
		]
	});
}
function LineArt() {
	return /* @__PURE__ */ jsxs("svg", {
		viewBox: "0 0 400 400",
		fill: "none",
		className: "w-full h-full",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", {
				id: "lg1",
				x1: "0",
				x2: "1",
				y1: "0",
				y2: "1",
				children: [/* @__PURE__ */ jsx("stop", {
					offset: "0%",
					stopColor: "#D8B4FE"
				}), /* @__PURE__ */ jsx("stop", {
					offset: "100%",
					stopColor: "#F5D5E0"
				})]
			}) }),
			/* @__PURE__ */ jsx("circle", {
				cx: "200",
				cy: "200",
				r: "140",
				stroke: "url(#lg1)",
				strokeWidth: "1.2"
			}),
			/* @__PURE__ */ jsx("circle", {
				cx: "200",
				cy: "200",
				r: "100",
				stroke: "#6B4F71",
				strokeOpacity: "0.25",
				strokeWidth: "1"
			}),
			/* @__PURE__ */ jsx("circle", {
				cx: "200",
				cy: "200",
				r: "60",
				stroke: "url(#lg1)",
				strokeWidth: "1.2"
			}),
			[
				0,
				60,
				120,
				180,
				240,
				300
			].map((a) => /* @__PURE__ */ jsx("ellipse", {
				cx: "200",
				cy: "120",
				rx: "14",
				ry: "38",
				fill: "url(#lg1)",
				opacity: "0.55",
				transform: `rotate(${a} 200 200)`
			}, a)),
			/* @__PURE__ */ jsx("circle", {
				cx: "200",
				cy: "200",
				r: "10",
				fill: "#6B4F71",
				opacity: "0.7"
			})
		]
	});
}
function LanternArt() {
	return /* @__PURE__ */ jsxs("svg", {
		viewBox: "0 0 300 360",
		fill: "none",
		className: "w-full h-full",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ jsxs("defs", { children: [/* @__PURE__ */ jsxs("radialGradient", {
				id: "glow",
				cx: "0.5",
				cy: "0.5",
				r: "0.5",
				children: [
					/* @__PURE__ */ jsx("stop", {
						offset: "0%",
						stopColor: "#FBD7A1",
						stopOpacity: "0.95"
					}),
					/* @__PURE__ */ jsx("stop", {
						offset: "60%",
						stopColor: "#F5D5E0",
						stopOpacity: "0.5"
					}),
					/* @__PURE__ */ jsx("stop", {
						offset: "100%",
						stopColor: "#D8B4FE",
						stopOpacity: "0"
					})
				]
			}), /* @__PURE__ */ jsxs("linearGradient", {
				id: "lant",
				x1: "0",
				x2: "0",
				y1: "0",
				y2: "1",
				children: [/* @__PURE__ */ jsx("stop", {
					offset: "0%",
					stopColor: "#D8B4FE"
				}), /* @__PURE__ */ jsx("stop", {
					offset: "100%",
					stopColor: "#6B4F71"
				})]
			})] }),
			/* @__PURE__ */ jsx("circle", {
				cx: "150",
				cy: "180",
				r: "150",
				fill: "url(#glow)"
			}),
			/* @__PURE__ */ jsx("line", {
				x1: "150",
				y1: "20",
				x2: "150",
				y2: "70",
				stroke: "#6B4F71",
				strokeWidth: "1.2"
			}),
			/* @__PURE__ */ jsx("rect", {
				x: "115",
				y: "70",
				width: "70",
				height: "12",
				rx: "4",
				fill: "url(#lant)"
			}),
			/* @__PURE__ */ jsx("path", {
				d: "M120 82 Q150 70 180 82 L195 230 Q150 250 105 230 Z",
				fill: "url(#lant)",
				opacity: "0.85"
			}),
			/* @__PURE__ */ jsx("path", {
				d: "M120 82 Q150 70 180 82 L195 230 Q150 250 105 230 Z",
				stroke: "#6B4F71",
				strokeWidth: "1",
				fill: "none"
			}),
			/* @__PURE__ */ jsx("line", {
				x1: "115",
				y1: "120",
				x2: "185",
				y2: "120",
				stroke: "#FFF8F5",
				strokeOpacity: "0.5"
			}),
			/* @__PURE__ */ jsx("line", {
				x1: "115",
				y1: "180",
				x2: "185",
				y2: "180",
				stroke: "#FFF8F5",
				strokeOpacity: "0.5"
			}),
			/* @__PURE__ */ jsx("rect", {
				x: "120",
				y: "230",
				width: "60",
				height: "18",
				rx: "4",
				fill: "#6B4F71"
			}),
			/* @__PURE__ */ jsx("path", {
				d: "M150 248 L150 290 M140 290 L160 290 M145 295 L155 295",
				stroke: "#6B4F71",
				strokeWidth: "1.2"
			}),
			/* @__PURE__ */ jsx("circle", {
				cx: "150",
				cy: "160",
				r: "22",
				fill: "#FFF1D6",
				opacity: "0.9"
			})
		]
	});
}
var features = [
	{
		icon: Shield,
		label: "Travel Safety"
	},
	{
		icon: HeartHandshake,
		label: "Trusted Community"
	},
	{
		icon: MapPin,
		label: "Local Support"
	},
	{
		icon: Bot,
		label: "AI Assistance"
	},
	{
		icon: Globe,
		label: "Human Connection"
	},
	{
		icon: Star,
		label: "Trust Systems"
	}
];
var journey = [
	{
		icon: "📚",
		title: "Learned Coding",
		body: "Where the curiosity began — first lines, first loops."
	},
	{
		icon: "⚙️",
		title: "Built Projects",
		body: "Turning ideas into real, working things."
	},
	{
		icon: "🤖",
		title: "Discovered AI",
		body: "A new way to think, build, and imagine."
	},
	{
		icon: "🚀",
		title: "Started Building Products",
		body: "From features to experiences people actually use."
	},
	{
		icon: "🏮",
		title: "Building Lantern",
		body: "A travel confidence platform — trust, safety, connection."
	},
	{
		icon: "🌍",
		title: "Future Founder Journey",
		body: "Learning out loud, one product at a time."
	}
];
var learning = [
	{
		icon: Brain,
		label: "Artificial Intelligence"
	},
	{
		icon: Bot,
		label: "Machine Learning"
	},
	{
		icon: Code2,
		label: "Backend Engineering"
	},
	{
		icon: Layers,
		label: "API Development"
	},
	{
		icon: Palette,
		label: "Product Design"
	},
	{
		icon: Sparkles,
		label: "User Experience"
	},
	{
		icon: Rocket,
		label: "Startup Execution"
	},
	{
		icon: HeartHandshake,
		label: "Community & Trust Systems"
	}
];
var aboutMe = [
	{
		emoji: "🏏",
		label: "Cricket Enthusiast"
	},
	{
		emoji: "🎬",
		label: "Marvel Fan"
	},
	{
		emoji: "🌍",
		label: "Travel & Culture Curious"
	},
	{
		emoji: "📚",
		label: "Story Writer"
	},
	{
		emoji: "🤖",
		label: "AI Explorer"
	},
	{
		emoji: "💡",
		label: "Startup Builder"
	}
];
function Section({ id, children, className = "" }) {
	return /* @__PURE__ */ jsx("section", {
		id,
		className: `relative mx-auto w-full max-w-6xl px-6 py-24 sm:py-32 ${className}`,
		children
	});
}
function Eyebrow({ children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-4 py-1.5 text-xs font-medium tracking-wide text-plum backdrop-blur",
		children: [/* @__PURE__ */ jsx(Sparkles, { className: "h-3.5 w-3.5" }), children]
	});
}
function Index() {
	return /* @__PURE__ */ jsxs("main", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ jsxs("section", {
				className: "relative overflow-hidden bg-gradient-hero",
				children: [/* @__PURE__ */ jsx(FloatingBlobs, {}), /* @__PURE__ */ jsxs("div", {
					className: "relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 pb-24 pt-28 sm:pt-36 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "animate-fade-up",
						children: [
							/* @__PURE__ */ jsx(Eyebrow, { children: "A personal note, written in code" }),
							/* @__PURE__ */ jsxs("h1", {
								className: "mt-6 font-display text-5xl leading-[1.05] tracking-tight text-plum sm:text-6xl lg:text-7xl",
								children: ["Hi Angel ", /* @__PURE__ */ jsx("span", {
									className: "inline-block animate-float-slow",
									children: "👋"
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-5 font-display text-2xl italic text-plum/80 sm:text-3xl",
								children: "Thank you for taking the time to visit."
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-6 max-w-xl text-base leading-relaxed text-foreground/80 sm:text-lg",
								children: "I'm Ravindra, a Computer Science graduate who loves learning through building. I'm currently exploring Artificial Intelligence, Machine Learning, Backend Engineering, Product Design, and Startup Execution — while turning ideas into real products that solve meaningful problems."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-8 flex flex-wrap items-center gap-3",
								children: [/* @__PURE__ */ jsxs("a", {
									href: "#journey",
									className: "group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition hover:translate-y-[-1px] hover:shadow-lg",
									children: ["View My Journey", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })]
								}), /* @__PURE__ */ jsxs("a", {
									href: "#connect",
									className: "inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-6 py-3 text-sm font-medium text-plum backdrop-blur transition hover:bg-white",
									children: [/* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }), " Get in Touch"]
								})]
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "relative mx-auto aspect-square w-full max-w-md animate-fade-in",
						children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-6 rounded-full bg-white/40 backdrop-blur-xl shadow-soft" }), /* @__PURE__ */ jsx("div", {
							className: "relative h-full w-full p-6",
							children: /* @__PURE__ */ jsx(LineArt, {})
						})]
					})]
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				id: "lantern",
				className: "relative overflow-hidden",
				children: [
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-soft opacity-25" }),
					/* @__PURE__ */ jsx(FloatingBlobs, {}),
					/* @__PURE__ */ jsxs(Section, {
						className: "relative",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "relative mx-auto aspect-[5/6] w-full max-w-sm",
									children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-[2.5rem] bg-white/50 backdrop-blur-xl shadow-soft animate-float-slow" }), /* @__PURE__ */ jsx("div", {
										className: "relative h-full w-full p-6",
										children: /* @__PURE__ */ jsx(LanternArt, {})
									})]
								}), /* @__PURE__ */ jsxs("div", { children: [
									/* @__PURE__ */ jsx(Eyebrow, { children: "Currently Building" }),
									/* @__PURE__ */ jsxs("h2", {
										className: "mt-5 font-display text-5xl text-plum sm:text-6xl",
										children: [/* @__PURE__ */ jsx("span", {
											className: "mr-2",
											children: "🏮"
										}), "Lantern"]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-4 font-display text-xl italic text-plum/80 sm:text-2xl",
										children: "Building confidence for travelers through trust, safety, and connection."
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "mt-6 space-y-4 text-base leading-relaxed text-foreground/80",
										children: [
											/* @__PURE__ */ jsx("p", { children: "Lantern is a travel confidence platform designed to help travelers feel safer, more connected, and more supported wherever they go." }),
											/* @__PURE__ */ jsx("p", { children: "The platform enables travelers to stay connected with trusted contacts, access reliable local recommendations, share safety check-ins, and quickly reach support during emergencies." }),
											/* @__PURE__ */ jsx("p", { children: "To validate the problem, I conducted traveler interviews and market research to better understand real-world challenges around trust, safety, communication, and confidence while traveling." }),
											/* @__PURE__ */ jsx("p", { children: "As founder and builder, I'm responsible for product design, user research, AI integration, backend development, strategy, and go-to-market planning." })
										]
									})
								] })]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
								children: features.map((f) => /* @__PURE__ */ jsxs("div", {
									className: "group flex items-center gap-4 rounded-2xl border border-white/60 bg-white/60 p-5 shadow-card backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-soft",
									children: [/* @__PURE__ */ jsx("div", {
										className: "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-soft text-plum transition group-hover:scale-110",
										children: /* @__PURE__ */ jsx(f.icon, { className: "h-5 w-5" })
									}), /* @__PURE__ */ jsx("span", {
										className: "font-medium text-plum",
										children: f.label
									})]
								}, f.label))
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mt-16 mx-auto max-w-3xl rounded-[2rem] border border-white/60 bg-white/70 px-8 py-10 text-center shadow-soft backdrop-blur-xl",
								children: /* @__PURE__ */ jsxs("p", {
									className: "font-display text-xl italic leading-relaxed text-plum sm:text-2xl",
									children: [
										"A lantern has always helped people find their way in unfamiliar places.",
										/* @__PURE__ */ jsx("br", {}),
										/* @__PURE__ */ jsx("span", {
											className: "text-plum/80",
											children: "Lantern exists for the same reason — helping travelers navigate the world with greater confidence, trust, and peace of mind."
										})
									]
								})
							})
						]
					})
				]
			}),
			/* @__PURE__ */ jsxs(Section, {
				id: "journey",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ jsx(Eyebrow, { children: "My Journey" }), /* @__PURE__ */ jsx("h2", {
						className: "mt-5 font-display text-4xl text-plum sm:text-5xl",
						children: "From first line of code to building a company."
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "relative mt-16",
					children: [/* @__PURE__ */ jsx("div", { className: "absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-plum/30 to-transparent sm:left-1/2" }), /* @__PURE__ */ jsx("ol", {
						className: "space-y-10",
						children: journey.map((j, i) => /* @__PURE__ */ jsxs("li", {
							className: `relative grid grid-cols-[3rem_1fr] gap-4 sm:grid-cols-2 sm:gap-12 ${i % 2 === 0 ? "" : "sm:[&>*:first-child]:order-2"}`,
							children: [/* @__PURE__ */ jsx("div", {
								className: `flex items-center ${i % 2 === 0 ? "sm:justify-end" : "sm:justify-start"}`,
								children: /* @__PURE__ */ jsxs("div", {
									className: "rounded-3xl border border-border bg-card/80 p-6 shadow-card backdrop-blur w-full sm:max-w-sm transition hover:-translate-y-1 hover:shadow-soft",
									children: [
										/* @__PURE__ */ jsx("div", {
											className: "text-3xl",
											children: j.icon
										}),
										/* @__PURE__ */ jsx("h3", {
											className: "mt-2 font-display text-2xl text-plum",
											children: j.title
										}),
										/* @__PURE__ */ jsx("p", {
											className: "mt-1 text-sm leading-relaxed text-foreground/75",
											children: j.body
										})
									]
								})
							}), /* @__PURE__ */ jsx("div", {
								className: "relative",
								children: /* @__PURE__ */ jsx("div", {
									className: "absolute left-6 top-8 -translate-x-1/2 sm:left-0 sm:translate-x-[-50%]",
									children: /* @__PURE__ */ jsx("div", { className: "h-4 w-4 rounded-full bg-gradient-soft shadow-soft ring-4 ring-background" })
								})
							})]
						}, j.title))
					})]
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "relative overflow-hidden",
				children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-soft opacity-20" }), /* @__PURE__ */ jsxs(Section, {
					className: "relative",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "max-w-2xl",
						children: [/* @__PURE__ */ jsx(Eyebrow, { children: "What I'm Learning" }), /* @__PURE__ */ jsx("h2", {
							className: "mt-5 font-display text-4xl text-plum sm:text-5xl",
							children: "A study in curiosity."
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
						children: learning.map((l) => /* @__PURE__ */ jsxs("div", {
							className: "group relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 p-6 shadow-card backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-soft",
							children: [/* @__PURE__ */ jsx("div", { className: "absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-soft opacity-30 blur-2xl transition group-hover:opacity-70" }), /* @__PURE__ */ jsxs("div", {
								className: "relative",
								children: [/* @__PURE__ */ jsx("div", {
									className: "flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-soft text-plum transition group-hover:rotate-6",
									children: /* @__PURE__ */ jsx(l.icon, { className: "h-5 w-5" })
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-4 font-display text-lg text-plum",
									children: l.label
								})]
							})]
						}, l.label))
					})]
				})]
			}),
			/* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-3xl text-center",
				children: [
					/* @__PURE__ */ jsx(Eyebrow, { children: "Why I Build" }),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-5 font-display text-4xl text-plum sm:text-5xl",
						children: "A quiet kind of obsession."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-10 space-y-5 font-display text-xl italic leading-relaxed text-plum/90 sm:text-2xl",
						children: [
							/* @__PURE__ */ jsx("p", { children: "Coding taught me problem solving." }),
							/* @__PURE__ */ jsx("p", { children: "AI taught me curiosity." }),
							/* @__PURE__ */ jsx("p", { children: "Building products taught me empathy." })
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mx-auto mt-10 max-w-2xl text-base leading-relaxed text-foreground/75 sm:text-lg",
						children: "Today, I'm combining all three while creating products centered around trust, safety, and meaningful human experiences. I believe technology should not only solve problems but also help people feel more confident, supported, and connected."
					})
				]
			}) }),
			/* @__PURE__ */ jsxs("section", {
				className: "relative overflow-hidden bg-gradient-hero",
				children: [/* @__PURE__ */ jsx(FloatingBlobs, {}), /* @__PURE__ */ jsxs(Section, {
					className: "relative",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "mx-auto max-w-2xl text-center",
							children: [
								/* @__PURE__ */ jsx(Eyebrow, { children: "Beyond Building" }),
								/* @__PURE__ */ jsx("h2", {
									className: "mt-5 font-display text-4xl text-plum sm:text-5xl",
									children: "📚 Stories, too."
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-5 text-base leading-relaxed text-foreground/80 sm:text-lg",
									children: "Technology is one way I express ideas. Storytelling is another. Alongside building software, I write stories that explore human emotions, relationships, resilience, and the journeys people take through life."
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-14 grid gap-8 sm:grid-cols-2",
							children: [/* @__PURE__ */ jsxs("article", {
								className: "group relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 p-8 shadow-soft backdrop-blur-xl transition hover:-translate-y-1",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "relative aspect-[3/4] overflow-hidden rounded-2xl shadow-card",
										children: [
											/* @__PURE__ */ jsx("img", {
												src: beyond_borders_png_asset_default.url,
												alt: "Beyond Borders of the Heart — book cover",
												className: "h-full w-full object-cover transition duration-700 group-hover:scale-105"
											}),
											/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-plum/40 via-transparent to-transparent" }),
											/* @__PURE__ */ jsx("div", {
												className: "absolute bottom-4 left-4 right-4 text-center",
												children: /* @__PURE__ */ jsx("p", {
													className: "text-xs uppercase tracking-[0.3em] text-white/90 drop-shadow",
													children: "A short story by Ravindra"
												})
											})
										]
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "mt-6 font-display text-2xl text-plum",
										children: "❤️ Beyond Borders of the Heart"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-2 text-sm leading-relaxed text-foreground/75",
										children: "A story exploring human connection, distance, emotions, and the invisible threads that bring people together despite the borders between them."
									})
								]
							}), /* @__PURE__ */ jsxs("article", {
								className: "group relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 p-8 shadow-soft backdrop-blur-xl transition hover:-translate-y-1",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "aspect-[3/4] rounded-2xl bg-gradient-to-br from-lavender via-blush to-cream p-6 shadow-card flex flex-col items-center justify-center text-center",
										children: [
											/* @__PURE__ */ jsx(Stethoscope, { className: "h-10 w-10 text-plum drop-shadow" }),
											/* @__PURE__ */ jsx("p", {
												className: "mt-5 font-display text-2xl text-plum",
												children: "Doctors Cure"
											}),
											/* @__PURE__ */ jsx("p", {
												className: "mt-2 text-xs uppercase tracking-[0.3em] text-plum/70",
												children: "A short story"
											})
										]
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "mt-6 font-display text-2xl text-plum",
										children: "🩺 Doctors Cure"
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-2 text-sm leading-relaxed text-foreground/75",
										children: "A story inspired by healthcare, compassion, resilience, and the impact people can have on one another during difficult moments."
									})
								]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mx-auto mt-14 max-w-2xl text-center",
							children: [/* @__PURE__ */ jsx("p", {
								className: "text-base leading-relaxed text-foreground/80 sm:text-lg",
								children: "The same curiosity that drives me to build products also drives me to write stories. Whether through code or storytelling, I'm fascinated by understanding people, solving problems, and creating experiences that leave a meaningful impact."
							}), /* @__PURE__ */ jsxs("a", {
								href: "#connect",
								className: "mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-6 py-3 text-sm font-medium text-plum backdrop-blur transition hover:bg-white",
								children: [/* @__PURE__ */ jsx(BookOpen, { className: "h-4 w-4" }), " Interested in reading more? Let's connect."]
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ jsx(Section, {
				id: "inspiration",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-3xl text-center",
					children: [
						/* @__PURE__ */ jsx(Eyebrow, { children: "What Inspired Me" }),
						/* @__PURE__ */ jsx("h2", {
							className: "mt-5 font-display text-4xl text-plum sm:text-5xl",
							children: "She & Soul focuses on people."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-8 space-y-5 text-base leading-relaxed text-foreground/80 sm:text-lg",
							children: [
								/* @__PURE__ */ jsx("p", { children: "While exploring She & Soul, I noticed something that genuinely resonated with me." }),
								/* @__PURE__ */ jsx("p", {
									className: "font-display text-xl italic text-plum",
									children: "Many products focus primarily on features."
								}),
								/* @__PURE__ */ jsx("p", {
									className: "font-display text-xl italic text-plum",
									children: "She & Soul focuses on people."
								}),
								/* @__PURE__ */ jsx("p", { children: "Creating trust, support, and meaningful experiences requires more than technology — it requires empathy and a deep understanding of human needs." }),
								/* @__PURE__ */ jsx("p", {
									className: "font-display text-plum",
									children: "That philosophy aligns closely with how I think about building products."
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "relative overflow-hidden",
				children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-soft opacity-20" }), /* @__PURE__ */ jsxs(Section, {
					className: "relative",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "max-w-2xl",
						children: [/* @__PURE__ */ jsx(Eyebrow, { children: "A Few Things About Me" }), /* @__PURE__ */ jsx("h2", {
							className: "mt-5 font-display text-4xl text-plum sm:text-5xl",
							children: "Off-screen, too."
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
						children: aboutMe.map((a) => /* @__PURE__ */ jsxs("div", {
							className: "group flex items-center gap-4 rounded-2xl border border-white/60 bg-white/70 p-6 shadow-card backdrop-blur-xl transition hover:-translate-y-1 hover:rotate-[-0.3deg] hover:shadow-soft",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-3xl transition group-hover:scale-125",
								children: a.emoji
							}), /* @__PURE__ */ jsx("span", {
								className: "font-medium text-plum",
								children: a.label
							})]
						}, a.label))
					})]
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				id: "connect",
				className: "relative overflow-hidden bg-gradient-hero",
				children: [/* @__PURE__ */ jsx(FloatingBlobs, {}), /* @__PURE__ */ jsxs(Section, {
					className: "relative",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "mx-auto max-w-2xl text-center",
							children: [/* @__PURE__ */ jsx(Eyebrow, { children: "Let's Connect" }), /* @__PURE__ */ jsx("h2", {
								className: "mt-5 font-display text-4xl text-plum sm:text-5xl",
								children: "I'd love to hear from you."
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-14 grid gap-5 sm:grid-cols-2",
							children: [
								{
									icon: Linkedin,
									label: "LinkedIn",
									value: "linkedin.com/in/ravindra-gogineni-034501212",
									href: "https://www.linkedin.com/in/ravindra-gogineni-034501212"
								},
								{
									icon: Github,
									label: "GitHub",
									value: "github.com/ravindra-gogineni",
									href: "https://github.com/ravindra-gogineni"
								},
								{
									icon: Mail,
									label: "Email",
									value: "ravindra8022@gmail.com",
									href: "mailto:ravindra8022@gmail.com"
								},
								{
									icon: Phone,
									label: "Phone",
									value: "+91 7993819157",
									href: "tel:+917993819157"
								}
							].map((c) => /* @__PURE__ */ jsxs("a", {
								href: c.href,
								target: "_blank",
								rel: "noreferrer",
								className: "group flex items-center gap-4 rounded-2xl border border-white/60 bg-white/60 p-6 shadow-card backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-soft",
								children: [/* @__PURE__ */ jsx("div", {
									className: "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-soft text-plum transition group-hover:scale-110",
									children: /* @__PURE__ */ jsx(c.icon, { className: "h-5 w-5" })
								}), /* @__PURE__ */ jsxs("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ jsx("p", {
										className: "text-xs font-semibold uppercase tracking-widest text-plum/60",
										children: c.label
									}), /* @__PURE__ */ jsx("p", {
										className: "mt-1 truncate text-sm font-medium text-plum",
										children: c.value
									})]
								})]
							}, c.label))
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-10 flex flex-wrap items-center justify-center gap-3",
							children: [
								/* @__PURE__ */ jsxs("a", {
									href: "https://www.linkedin.com/in/ravindra-gogineni-034501212",
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition hover:-translate-y-0.5",
									children: [/* @__PURE__ */ jsx(Linkedin, { className: "h-4 w-4" }), " Connect on LinkedIn"]
								}),
								/* @__PURE__ */ jsxs("a", {
									href: "https://github.com/ravindra-gogineni",
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-6 py-3 text-sm font-medium text-plum backdrop-blur transition hover:bg-white",
									children: [/* @__PURE__ */ jsx(Github, { className: "h-4 w-4" }), " View GitHub"]
								}),
								/* @__PURE__ */ jsxs("a", {
									href: "mailto:ravindra8022@gmail.com",
									className: "inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-6 py-3 text-sm font-medium text-plum backdrop-blur transition hover:bg-white",
									children: [/* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }), " Send Email"]
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "relative overflow-hidden",
				children: [
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-soft opacity-40" }),
					/* @__PURE__ */ jsx(FloatingBlobs, {}),
					/* @__PURE__ */ jsx(Section, {
						className: "relative",
						children: /* @__PURE__ */ jsxs("div", {
							className: "mx-auto max-w-3xl rounded-[2.5rem] border border-white/60 bg-white/70 px-8 py-16 text-center shadow-soft backdrop-blur-xl sm:px-14 sm:py-20",
							children: [
								/* @__PURE__ */ jsx(Sparkles, { className: "mx-auto h-7 w-7 text-plum" }),
								/* @__PURE__ */ jsxs("blockquote", {
									className: "mt-6 space-y-5 font-display text-2xl italic leading-relaxed text-plum sm:text-3xl",
									children: [
										/* @__PURE__ */ jsx("p", { children: "\"I don't know everything yet." }),
										/* @__PURE__ */ jsx("p", { children: "But I genuinely love learning, building, and turning ideas into products that help people." }),
										/* @__PURE__ */ jsx("p", { children: "Every project teaches me something new." }),
										/* @__PURE__ */ jsx("p", { children: "Every challenge helps me grow." }),
										/* @__PURE__ */ jsx("p", { children: "And every conversation opens the door to a new possibility.\"" })
									]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-8 text-sm font-medium uppercase tracking-[0.3em] text-plum/70",
									children: "— Ravindra"
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ jsx("footer", {
				className: "border-t border-border bg-cream",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-6 py-12 sm:flex-row",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: "font-display text-2xl text-plum",
						children: "Ravindra"
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-1 text-sm text-foreground/60",
						children: "Builder · Storyteller · Future Founder"
					})] }), /* @__PURE__ */ jsxs("div", {
						className: "flex flex-wrap items-center justify-center gap-3",
						children: [
							/* @__PURE__ */ jsx("a", {
								href: "mailto:ravindra8022@gmail.com",
								className: "text-sm text-plum hover:underline",
								children: "ravindra8022@gmail.com"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-plum/30",
								children: "·"
							}),
							/* @__PURE__ */ jsx("a", {
								href: "https://www.linkedin.com/in/ravindra-gogineni-034501212",
								target: "_blank",
								rel: "noreferrer",
								className: "text-sm text-plum hover:underline",
								children: "LinkedIn"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-plum/30",
								children: "·"
							}),
							/* @__PURE__ */ jsx("a", {
								href: "https://github.com/ravindra-gogineni",
								target: "_blank",
								rel: "noreferrer",
								className: "text-sm text-plum hover:underline",
								children: "GitHub"
							})
						]
					})]
				})
			})
		]
	});
}
//#endregion
export { Index as component };
