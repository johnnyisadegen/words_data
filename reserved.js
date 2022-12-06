let magicEdenReserved = new Set(["😈", "🍩", "🏎️", "🍀", "🤖", "✅", "1️⃣", "2️⃣", "3️⃣", "🥇", "🍿", "🪄", "🛩", "💩", "🚁", "🎤", "🥑", "🍍", "🤙", "🐢", "🌎", "🍣", "🦖", "🧙‍♂️", "🤮", "🦘", "💛", "💜", "👾", "🧠", "🐈‍⬛", "🍸", "🪃", "🧁", "💾", "🧲", "🎠", "🧩", "🪁", "🥟", "🍻", "🪨", "👠", "😴", "🎃", "👮‍♀️", "🧜‍♀️", "🧜‍♂️", "👍🏽", "🧘‍♂️", "💊", "🇺🇸🍷", "🇫🇷🍷", "🇩🇪🍷", "🇬🇧🍷", "🇨🇮🍷", "🇧🇪🍷", "🇿🇦🍷", "🇳🇿🍷", "🇦🇺🍷", "🇵🇹🍷", "🇪🇸🍷", "🇫🇷🍾", "🇫🇷🥂", "🇯🇵🍶", "🇰🇷🍶", "🇺🇸🍺", "🇫🇷🍺", "🇩🇪🍺", "🇬🇧🍺", "🇧🇪🍺", "🎤😝", "😝🍾", "☎️🇬🇧", "↪️🔙", "🚁🥂", "😉🍾", "😎🍕", "😇🇺🇸", "🛸🛸", "🍀🍀", "🇺🇸🏈", "🇺🇸🍔", "🇺🇸🚓", "🇨🇦🇺🇸", "🎉🎈", "🍕🌎", "🍣🌎", "💰🏝", "🏀🏈", "❤️💙", "❤️🦄", "🇺🇸🐳", "👑🇺🇸", "🦅🇺🇸", "🍫🍓", "🇺🇸🤖", "🍀🤖", "🚀🚀", "🚀🍾", "🛩🍾", "📈🍾", "🤠🇺🇸", "💩💩", "😍🍾", "🥵 🥶", "🤣🤣", "🤌🇮🇹", "👍👍", "👊👊", "😍🥑", "🍝🇮🇹", "🍕🇮🇹", "🍕🍍", "🏁🥳", "🏎️🏁", "🍔🍟", "🍔🍺", "💤🦍", "💤🦁", "🇺🇸🎓", "🇦🇺🎓", "🇬🇧🎓", "💥💩", "🥷🐢", "🤬💩", "😱📰", "🤙🤙", "🤙🏄‍♂️", "🌮🇲🇽", "🌯🇲🇽", "🥞🛸", "🦴🐶", "🪃🇦🇺", "🥊🏆", "🥩🇺🇸", "✈️🇺🇸", "✈️🇫🇷", "✈️🇩🇪", "✈️🇬🇧", "✈️🇨🇮", "✈️🇧🇪", "✈️🇿🇦", "✈️🇳🇿", "✈️🇦🇺", "✈️🇵🇹", "✈️🇪🇸", "✈️🇯🇵", "✈️🇰🇷", "🧇🇺🇸", "🥓🇺🇸", "🥞🇺🇸", "🛥🥳", "🏴‍☠️🎙️", "🇨🇦🧇", "🇨🇦🥓", "🇨🇦🥞", "🦅👁", "👁🐯", "🐯🦅", "8️⃣8️⃣", "💩🧻", "🔥❄️", "🍀💚", "🏠💜", "👽🛸", "🎁😎", "🌚🍔", "🥂🍤", "🥂🎸", "🏇🏻🎰", "🐯🍤", "🏖🎰", "🎬🇺🇸", "🐯👑", "💙🥂", "💜😇", "😝🌟", "🌎🦄", "🎸🦄", "🤑🍕", "🌎✌🏻", "🎰🏆", "🍫😜", "🥷🏼🍾", "🍫🍾", "🇮🇹🍾", "🎱🚁", "🤖😜", "🐰🇸🇪", "🛼🎤", "🍔✌🏻", "💥💥", "⭐️😜", "💥🎰", "🐬👑", "🛼🍹", "👽🍔", "🍴🍔", "👽🗿", "🖖👽", "🇨🇳🐼", "💎💎", "💎🦄", "💎🐳", "💎❤️", "💎🍀", "💎🦍", "💎👸", "💎🤴", "💎🙌", "☮️💎", "🍀🎲", "👸🌎", "🤴🌎", "🍓☁️", "🧊🐻", "🍸🤵🏻‍♂️", "🍌🦍", "🐘🇮🇳", "🧶🐈", "🌪💵", "🔔🔔", "🗽💵", "⛽️💵", "🛥🥳", "🛥🗺", "🍀🦆", "❤️🤮", "👽🦖", "🏂🏼⭐️", "🍄🦞", "🍀🍻", "🤴🐳", "🍻👑", "🕳👨‍🦯", "🐂💩", "🤡🪞", "😌💅", "❄️🏂🏼", "✨🍄", "🛌🤺", "🇨🇭🧀", "🇫🇷🧀", "🇮🇹🧀", "🏴󠁧󠁢󠁷󠁬󠁳󠁿🧀", "🏴󠁧󠁢󠁳󠁣󠁴󠁿🧀", "🇩🇪🧀", "🇨🇮🍺", "☮️🤝🏾", "☮️❤️", "☮️🕊", "☮️🍀", "🧿🇬🇷", "🧿😃", "🧿🍀", "📸👁", "📞🧠", "🎉🚂", "🏆🍺", "🔥🌭", "☕️🐸", "🍫🍪", "🌶🔥", "☕️👌", "🛌🏃‍♀️", "🙄🤚", "🤸‍♀️🚊", "🎷🐛", "🎤🦆", "🦠💊", "🏀🎮", "⚽️🎮", "⚾️🎮", "🏈🎮", "💋🐴", "⛸🏒", "🧨🎵", "🎮🎉", "🧨🐸", "🏋️👑", "🎵👑", "🍴🌈", "🥊👑", "🍀🐱", "🍀🦊", "🔥🦊", "🦃🎊", "🎅🎊", "🕎🎊", "🍀🎱", "🍀🎰", "🧟🧟‍♂️", "🧐🕵️‍♂️", "🍯🐝", "🧜🏽‍♀️❤️", "🧞‍♂️🍀", "🪐👽", "🌝👽", "👽👑", "🐊🏝", "🍀🌈", "👵🍪", "🪄🍄", "💎💍", "🕷🕸", "🧙‍♂️🎉", "😷🦠", "🎃🧟‍♀️", "💎👀", "🧟‍♀️🔪", "🎾🥇", "🎃🧛‍♀️", "🧙‍♂️🪄", "👩🏽‍🔬💉", "🧙🏽🔮", "💂🏻‍♀️🇬🇧", "🦾🥷🏼", "🇫🇷👨🏻‍🍳", "🐪🚬", "💈💇🏻‍♀️", "🌶👀", "🇫🇷🥐", "⚔️🛡", "🇺🇸💡", "🔋🎮", "🧬🧪", "🇫🇷💅", "💡👀", "🇫🇷💄", "🇫🇷👜", "🇺🇸🥧", "🆗🆗", "🃏✨", "🎿🏔", "🇯🇲🏖", "🎭🤹🏼‍♂️", "📸💣", "💰🏇", "✂️💔", "💵⛲️", "💰💡", "👂💩", "💩🧠", "❄️☃️", "🧚🏽‍♀️🍄", "🌹😘", "🇦🇺🦘", "🇯🇵🌸", "🐧🐧", "💰🐳", "🍔👑", "🐺❄️", "🦣❄️", "🌙🦜", "🦄🐾", "718", "941", "597", "545", "410", "643", "872", "150", "497", "351", "947", "318", "871", "614", "548", "377", "163", "245", "690", "550", "308", "279", "399", "596", "582", "355", "301", "392", "990", "465", "609", "585", "696", "989", "816", "362", "151", "573", "646", "793", "628", "660", "403", "604", "688", "865", "307", "480", "728", "563", "574", "267", "443", "904", "476", "384", "997", "404", "676", "143", "850", "873", "459", "881", "269", "565", "745", "216", "739", "405", "455", "418", "445", "230", "198", "152", "334", "723", "897", "721", "580", "740", "998", "329", "466", "965", "710", "147", "162", "877", "701", "847", "607", "639", "755", "178", "942", "341", "115", "564", "380", "633", "895", "394", "257", "170", "248", "201", "698", "290", "490", "286", "968", "376", "470", "658", "396", "452", "662", "168", "122", "219", "311", "187", "499", "510", "272", "390", "208", "627", "623", "678", "252", "929", "789", "487", "867", "889", "737", "132", "992", "939", "882", "128", "933", "407", "486", "215", "848", "406", "tui", "kep", "tup", "tao", "flu", "obe", "zek", "emu", "lid", "kae", "guy", "duo", "orb", "icy", "his", "she", "yum", "wow", "ace", "buy", "oar", "sap", "ben", "ort", "arm", "nil", "aby", "koa", "nie", "oms", "hin", "gut", "hoy", "fib", "foe", "elk", "hyp", "teg", "sit", "got", "zas", "jay", "six", "ehs", "err", "tin", "tum", "lin", "ops", "let", "lym", "pry", "taw", "ohm", "pes", "los", "alb", "lar", "fer", "spy", "see", "jun", "zzz", "gae", "ahs", "ami", "nae", "peh", "bob", "sez", "dim", "hos", "mum", "dow", "emf", "ame", "wet", "god", "gin", "tho", "lod", "elt", "roc", "duh", "oye", "zos", "hot", "run", "rin", "mae", "taj", "pet", "pap", "who", "wan", "oys", "ing", "yip", "nay", "nan", "ped", "end", "phi", "dol", "ois", "sad", "bin", "wop", "toy", "pst", "ats", "jow", "mis", "ree", "men", "ned", "eke", "pig", "nis", "lop", "oor", "nah", "ria", "umu", "een", "dit", "ygo", "hye", "mus", "utu", "oxy", "lep", "efs", "ids", "mem", "toe", "hoa", "dop", "iff", "pip", "ech", "tex", "faa", "erg", "sub", "zoa", "twa", "hmm", "🛸🛸🛸", "🇺🇸✖️🇨🇦", "🇺🇸🤝🏾🇨🇦", "🇬🇧✖️🇮🇳", "🇬🇧🤝🏾🇮🇳", "🇬🇧🇬🇧🇬🇧", "🇮🇳🇮🇳🇮🇳", "🇨🇦🇨🇦🇨🇦", "✨🍫🍓", "🍔🍔🍔", "🇺🇸❤️🇨🇦", "😎🤝🏾🛸", "🇺🇸🤝🏾🛸", "🤓🤓🤓", "😎😎😎", "🍀🤑🎱", "🍀🤑😎", "🚀🚀🚀", "🎁🎁🎁", "🏁🛥🥳", "🎙🍋😋", "🇨🇦😈🇨🇦", "🍩🍩🍩", "🇷🇺🏀⭐️", "🛥🇫🇷🤑", "🇫🇷🇫🇷🇫🇷", "🏎️🏁🥳", "🏈🤩🙃", "🍀🏀🍀", "😜🎸😜", "🍀🍀🍀", "🛥🤩🛥", "🍔🏈🇺🇸", "🍔🏈🚓", "😝🇨🇦🇺🇸", "🚁🚁🚁", "👻👻👻", "🌟🌟🌟", "😝😝😝", "🎈🎈🎈", "🎉🎉🎉", "🍀🎉🏆", "🍕🍕🍕", "🌎🍕🌎", "🍣🍣🍣", "😇😇😇", "🤖🤖🤖", "💰💰💰", "🏝🏝🏝", "😁🏖👑", "😅😂🤣", "👀👀👀", "⚽️🏀🏈", "❤️🧡💛", "💚💙💜", "✅✅✅", "🏴‍☠️🏴‍☠️🏴‍☠️", "🐳🐳🐳", "🦄🦄🦄", "🌈🌈🌈", "🌎🌍🌏", "🦄🦍🐳", "🦅🇺🇸🦅", "🔥🔥🔥", "🦊🦊🦊", "🌭🍔🍟", "🍦🍦🍦", "🍺🍺🍺", "🥇🥈🥉", "1️⃣2️⃣3️⃣", "4️⃣2️⃣0️⃣", "🌜🌝🌛", "🚪🏃‍♀️💨", "🍿🤏😯", "👁👄👁", "👩🤏👩‍🦲", "👉🙄👈", "😃👉🚪", "😏🤝🙄", "😐😑😐", "🦗🦟🦗", "🌚🥂🌝", "🪄🍄😵‍💫", "🍝🇮🇹🍕", "0x🇺🇸", "0x🍫", "0x🍔", "0x🍀", "0x👻", "0x🥳", "0x🤠", "0x🌍", "0x⚡️", "0x🏈", "0x🎲", "0x🍣", "0x😇", "0x👽", "0x🏆", "0x💰", "0x🔔", "0x⭐️", "0x❤️", "0x👋", "0x🥂", "0x🧸", "0x🤖", "0x🤩", "0x🍕", "0x🎙", "0x🦄", "0x🍺", "0x🍷", "0x🥷", "0x🍾", "0x🐳", "0x💎", "0x🦍", "❤️ny", "❤️la", "🏀la", "la🇫🇷", "my❤️", "my🍀", "my⭐️", "my🦄", "gm❤️", "gm🦄", "gm⭐️", "gm😎", "gm🍀", "gm👋", "yo😎", "yo🍀", "yo🚀", "yo😃", "yo👋", "hi👋", "oh😱", "7399", "9421", "3402", "5513", "3155", "5325", "9174", "2816", "1422", "6543", "4484", "5726", "2796", "7772", "7270", "4748", "5801", "1982", "9960", "5665", "5117", "1151", "2066", "8866", "4538", "4330", "5734", "7597", "8355", "4250", "3869", "6072", "9233", "9520", "7773", "8783", "4422", "6403", "8787", "1697", "6483", "8516", "9295", "9391", "7948", "2437", "5953", "4653", "1840", "1230", "5592", "8362", "5601", "1414", "2170", "8889", "8615", "3513", "5884", "5284", "3912", "3498", "1712", "1965", "1504", "9723", "9303", "9662", "2275", "7149", "3457", "4168", "2228", "8302", "3527", "9008", "5050", "4167", "4686", "9430", "4785", "3170", "3392", "3735", "9972", "2735", "8288", "4296", "2143", "5274", "7958", "9568", "2832", "3407", "6099", "6977", "4082", "8133", "3299", "3990", "7128", "3680", "1754", "3515", "6255", "7828", "6673", "6995", "6571", "8283", "7049", "6989", "1634", "5500", "9272", "4035", "6974", "2441", "3166", "3683", "9314", "8470", "6202", "1575", "5379", "2404", "7298", "2948", "1758", "2157", "7739", "2543", "7113", "9905", "4494", "7494", "7774", "5736", "7622", "3622", "4914", "2668", "9338", "8340", "3090", "1180", "2921", "8211", "4817", "5511", "9747", "3519", "6602", "4909", "3636", "8596", "8032", "3181", "6065", "2044", "8217", "1486", "2594", "2134", "1447", "2916", "3294", "8021", "7267", "3464", "3625", "9665", "3999", "2385", "2024", "2012", "1658", "5999", "4070", "1744", "2610", "5489", "7146", "5960", "3397", "7906", "6523", "4052", "7817", "7986", "3613", "5967", "8925", "7467", "5657", "2977", "4758", "1724", "6100", "9886", "7920", "2049", "8542", "2931", "5670", "7861", "1193", "5652", "7890", "4471", "1480", "7675", "6086", "8092", "3766", "9467", "1265", "6170", "1772", "4755", "8599", "1707", "8853", "9068", "9241", "6077", "8569", "7483", "5010", "5882", "9994", "6273", "1746", "3789", "7343", "3779", "3896", "2896", "7857", "3877", "6850", "7006", "2433", "9514", "8196", "4187", "5044", "5247", "8209", "7451", "idol", "tefs", "saws", "muzz", "wood", "dale", "hero", "info", "cake", "atop", "awee", "kief", "ante", "coly", "oast", "dons", "myth", "paco", "loun", "ruby", "loam", "faro", "sits", "zebu", "labs", "tech", "ylem", "lurs", "sens", "same", "pipe", "wats", "back", "sari", "ingo", "rids", "owre", "fubs", "hull", "sows", "chal", "buat", "sign", "pubs", "well", "fuds", "cees", "king", "aias", "waxy", "kago", "pigs", "luce", "gain", "whey", "hoor", "eyer", "worm", "alew", "fuzz", "join", "huts", "mani", "roky", "oval", "sora", "fore", "odal", "must", "bere", "grey", "orbs", "boko", "gama", "idle", "odas", "doer", "impi", "zill", "rems", "bull", "pats", "pacs", "haha", "riva", "pita", "oups", "ludo", "gala", "yeps", "albe", "unbe", "leme", "agee", "news", "vali", "wyte", "swop", "dine", "boyf", "edhs", "aloo", "also", "slit", "cowy", "vugs", "slub", "limo", "chef", "from", "yuko", "slat", "bapu", "mole", "rise", "sops", "spec", "pale", "doss", "kudo", "yank", "mets", "zyga", "ales", "lurk", "moer", "bugs", "keir", "bits", "eild", "gast", "alas", "ohed", "ryke", "elms", "reny", "raps", "lavs", "vade", "user", "mars", "jehu", "brit", "obis", "cams", "sagy", "nies", "heel", "burk", "juts", "yaud", "band", "fool", "ache", "khor", "yale", "sods", "sell", "gyal", "dado", "none", "ares", "blay", "coke", "rubs", "mire", "mark", "sidh", "kana", "mead", "tipt", "mino", "gymp", "boho", "hoki", "crud", "euro", "leep", "soja", "abid", "cria", "kyat", "hups", "nite", "fisk", "egis", "pase", "gong", "huic", "bock", "iced", "gave", "sleb", "kook", "tora", "oops", "seta", "babu", "kaie", "tomo", "🍻god", "⚽️god", "alt🧩", "alt🎮", "🧸kid", "sol👑", "eth👑", "⚽️kid", "🚀boy", "nft💰", "💰guy", "🚤guy", "🎅🏼guy", "🚀man", "🏍man", "🔮man", "🐶nft", "🏂🏼lad", "🏄🏼‍♂️lad", "🏝boy", "🎹mix", "wen🍣", "wen🌝", "💜nft", "hey😜", "💰bag", "🧑🏼‍🎄nan", "bob💰", "sup😎", "icy❄️", "fat🐱", "🇺🇸dad", "🎨dad", "cat🐱", "dog🐕", "mom💕", "🇺🇸mom", "🇲🇾ape", "🇹🇼ape", "ape✈️", "👽ape", "👽dad", "🏎boy", "boy🤖", "🛸boy", "🐅 boy", "🐯mom", "🥑avo", "🎸app", "💰app", "👾bro", "🍕bro", "💰bro", "🚀bro", "fix🪛", "fix🛠️", "fun🤩", "fun🎈", "fun🎉", "fun🥳", "new🚀", "new🌟", "new💰", "gal🌟", "gal🛍️", "gal❤️", "bot🦾", "bot🤖", "bot🤓", "hot🌶️", "hot🔥", "car🏎️", "car🚗", "cat🐈", "dog🐕", "sup👋", "sup🦆", "sup👨‍⚕️", "tik⏰", "bed🛏️", "ski⛷️", "hex🐳", "hex💎", "hex⛓️", "boo😱", "boo❤️", "boo👻", "pop🎵", "pop🧨", "pop💣", "pop💥", "bin🗑️", "yum🍦", "yum🍔", "yum🍣", "bro😎", "🇺🇸bro", "🇬🇧bro", "vox🎙", "vox👽", "87551", "14881", "71067", "47680", "65348", "73158", "36937", "48707", "48109", "35977", "86912", "64683", "24123", "67993", "90523", "17581", "91455", "33876", "55329", "22060", "55031", "21869", "46918", "24268", "24665", "23842", "97843", "51598", "26532", "84639", "36588", "89070", "94045", "64975", "64865", "25693", "19012", "62952", "18631", "88028", "48272", "53277", "97642", "86195", "81142", "93836", "16552", "72776", "39446", "14559", "67631", "17503", "28862", "20328", "71506", "86480", "97454", "45598", "99639", "72797", "88629", "71114", "27439", "12267", "65281", "14581", "54011", "73238", "30717", "76050", "31430", "89875", "90952", "22573", "66312", "20837", "38239", "97100", "92781", "75534", "27860", "50731", "20999", "79481", "46406", "32224", "62582", "43409", "20940", "87336", "91358", "41279", "34063", "96500", "22015", "35696", "35893", "93767", "29887", "48710", "89753", "78413", "43302", "17494", "39488", "39611", "75130", "42462", "24285", "87039", "66237", "45482", "68929", "51892", "12638", "25822", "81410", "72985", "46124", "61636", "36317", "99746", "41514", "49175", "37241", "45582", "11135", "12578", "71761", "85728", "37275", "21628", "29940", "24377", "47481", "63149", "55577", "37012", "98281", "83964", "58682", "17366", "52622", "53750", "28412", "68510", "78942", "85173", "57852", "25252", "25787", "84996", "87102", "72829", "46146", "47226", "25276", "59759", "53373", "75689", "58221", "99371", "81068", "89585", "81358", "65073", "56299", "96659", "26179", "41919", "46783", "67503", "40764", "39913", "61711", "97545", "81606", "31263", "83573", "25705", "76068", "61975", "85230", "68140", "19781", "12652", "46764", "21074", "61475", "18518", "39156", "59609", "59993", "71296", "85312", "44750", "48538", "18735", "90412", "26434", "fomes", "shuls", "roofy", "tagma", "boohs", "plaza", "unred", "blume", "buroo", "mauby", "wrack", "gloat", "fordo", "wedgy", "wilts", "gonof", "woads", "sculs", "glide", "chasm", "prink", "hence", "kasme", "zoner", "flake", "orris", "repeg", "mousy", "aimer", "spree", "oozes", "kutus", "hocks", "pouts", "sores", "brize", "pocky", "dital", "yexes", "sithe", "plims", "vixen", "pownd", "corse", "crine", "mamee", "agone", "roomy", "dicey", "yests", "abuse", "rusks", "kimbo", "parps", "bouge", "chufa", "pilaw", "shoyu", "swoop", "drant", "paean", "baked", "puers", "stank", "salse", "carap", "gaffs", "apaid", "quail", "minim", "axite", "dalis", "ditzy", "reamy", "gooky", "teaed", "leccy", "shout", "moust", "wrath", "duras", "myxos", "drere", "rioja", "boded", "kneed", "waxen", "ruble", "tubal", "calix", "pells", "shiel", "pacos", "fosse", "nowty", "panel", "culpa", "astir", "birds", "trawl", "pygmy", "flame", "barmy", "laich", "shako", "slain", "trona", "sleet", "bosie", "nixer", "woald", "kelim", "might", "naans", "cozey", "nacre", "impot", "sulph", "tosed", "neifs", "germs", "sooks", "claut", "capos", "ansae", "niffs", "hotly", "hyrax", "wolfs", "kyloe", "vases", "bobak", "bouns", "dears", "sukhs", "weald", "epris", "tasar", "fenis", "orals", "clows", "proof", "tanga", "iotas", "linin", "mitre", "terns", "bodhi", "acock", "icier", "pones", "layup", "farts", "tumpy", "moxas", "banty", "perdu", "terms", "rowan", "bilbo", "plook", "barms", "spoke", "rawns", "cords", "dowdy", "alecs", "rowed", "grebo", "diets", "dript", "loony", "merry", "mahoe", "dicta", "septa", "gamut", "reels", "beset", "coked", "monde", "mahua", "ciels", "salts", "halfs", "moted", "arles", "culms", "cutie", "bulla", "toise", "corps", "khans", "womyn", "saned", "remen", "squid", "vapor", "maerl", "marms", "🎸hero", "🎮hero", "🏈hero", "🍕geek", "🧑🏼‍💻geek", "🤓geek", "😎dude", "🥳dude", "🤠dude", "👽dude", "🐨mate", "🐲mate", "😋hero", "doge👑", "👾game", "🛥news", "🔥food", "🌞girl", "🦋girl", "lord🧸", "open🔑", "safe🔑", "🕷tech", "test🕸", "mono🚂", "wild🐶", "wild🐱", "wild🐺", "👑king", "👽hero", "cool🐱", "cool🧸", "pink🦄", "🏀zone", "wise🐵", "cool🐢", "cool🐼", "🏄🏻girl", "🐊king", "🌸lady", "🧑🏼‍🎨lady", "🦈week", "🍾papi", "🐯king", "play🏀", "🏄🏼‍♀️star", "💙nfts", "rock🌟", "🇮🇸girl", "🇮🇹girl", "🇬🇧girl", "🐎news", "🐶food", "🇯🇵food", "🐐goat", "🇧🇷food", "🍾jack", "🍿time", "🦤dodo", "🏝isle", "meta🏝", "🛼race", "mega🎙", "🤓nerd", "🇬🇧bags", "⛹🏽‍♂️news", "🕺🏽lord", "👽girl", "goto💰", "gogo💰", "🤖town", "👽city", "👰🏼‍♀️shop", "🍣 shop", "🚴🏼shop", "🏌🏽shop", "🍦shop", "eddy⭐️", "❄️snow", "rich🤓", "rich😜", "rich🤑", "rich🐳", "rich🦍", "hodl🦍", "hodl💰", "hodl🦄", "🛹shop", "🏀goat", "🏈goat", "🎟shop", "🎮mall", "team🇰🇷", "🇵🇹team", "👾land", "🤖land", "tech🧠", "tech⭐️", "wise👨‍🔬", "👨‍🍳mike", "mike🥷", "abigail", "abigayl", "alden", "aharon", "aileen", "akemi", "aldingham", "alessia", "alfred", "allegra", "alonzo", "alphonzo", "alvar", "amalfi", "amara", "amboise", "amelia", "andrea", "andvari", "angevin", "anita", "antibes", "antigone", "antigua", "anzu", "aoife", "arianna", "arjun", "arnaud", "astrid", "athenian", "atlantan", "attila", "australian", "backwell", "bailey", "bamburgh", "barnes", "beijinger", "bianca", "birmingham", "biscayne", "bjorn", "boise", "bolton", "brazilian", "brittney", "brooklynite", "brown", "brunehilde", "byzantine", "calgarian", "caoimhe", "capucine", "carmel", "carson", "caspian", "cassandra", "castillo", "celestina", "chiara", "chiswick", "chiyo", "christoph", "ciaran", "cinderella", "claude", "cosimo", "cyclops", "dakar", "dallasite", "damascus", "daniella", "dante", "danube", "dario", "darius", "darreon", "davenport", "davis", "deauville", "december", "delaney", "delphi", "delta", "denali", "dijon", "divya", "dixon", "domenico", "donna", "dorothy", "dubaite", "dunbar", "dwight", "edwin", "egyptian", "eldorado", "eleanora", "electra", "elgin", "elodie", "elva", "emiko", "emiliana", "emirati", "enzo", "escante", "esther", "etna", "eugene", "everest", "fafnir", "fahim", "farah", "farida", "fernanda", "filton", "fiorella", "floki", "florentine", "flores", "foster", "francesco", "francorchamps", "freja", "freya", "fumiko", "galilea", "garcia", "genoese", "georges", "giacomo", "gianna", "gilbert", "gina", "ginevra", "giorgio", "giovanna", "giovanni", "giovanni", "giulia", "giuseppe", "giuseppina", "glendale", "goldcoaster", "gonzalez", "graham", "greenwood", "guadalupe", "gudrun", "gunther", "habibs", "haneul", "melvin", "harley", "harris", "hastings", "hedvig", "helene", "helga", "heracles", "hernandez", "hilda", "hiresh", "hiroko", "hiroshi", "honora", "hyde", "imelda", "indianapolis", "indus", "inga", "inger", "ingrid", "ingrid", "ishan", "isleroyale", "itsuki", "jade", "jarl", "javier", "jerome", "jimmy", "jones", "josaiah", "jude", "jules", "juniper", "jupiter", "kathleen", "katriana", "kazuko", "keiko", "kenneth", "kent", "keswick", "kiko", "kilimanjaro", "killian", "kingslanding", "kingstonian", "kokoro", "koto", "kumiko", "lakshmi", "lasvegan", "layla", "leandro", "leonora", "lexington", "londoner", "lorraine", "louis", "lucas", "luciano", "luigi", "luna", "madeline", "madura", "maja", "makenna", "malo", "manami", "mandy", "manihiki", "marcella", "margot", "marigold", "mario", "marmara", "marrowstone", "martina", "martinez", "mason", "massimo", "mattea", "matthias", "maxime", "maya", "mayfield", "mayflower", "megumi", "mehmet", "meiji", "mekong", "merlin", "midas", "milanese", "miller", "milos", "milton", "mirza", "mitiaro", "miyoko", "monday", "montecarlo", "montrose", "moore", "mordechai", "moroccan", "mwali", "myles", "nadia", "natan", "nelson", "neptune", "newbury", "nicolo", "nikita", "nisha", "noah", "noam", "nozomi", "octavia", "odin", "odysseus", "oisin", "omar", "omer", "ottawan", "pablo", "paddington", "paolo", "keegan", "peloponnesian", "perez", "petra", "petunia", "phoebe", "phoenix", "pisces", "prescot", "preston", "primo", "priya", "prometheus", "quentin", "rajeev", "ramirez", "ramsey", "ravenna", "reeves", "renzo", "rhine", "riogrande", "roberto", "rocco", "roderic", "rodriguez", "rohan", "romulus", "ronald", "rosemarie", "rosetta", "ryan", "sabrina", "johan", "sakura", "salma", "salvatore", "samara", "sandy", "sanjay", "santino", "sarai", "scarlett", "scorpio", "sergio", "shelby", "sherlock", "shimon", "shizuko", "sierra", "sigurd", "silvio", "sindhu", "singaporean", "sleipnir", "smithsonian", "socrates", "marcel", "spartan", "stella", "suraj", "swansea", "tadashi", "tagus", "takoda", "talia", "talladega", "tallulah", "tamar", "taurus", "teagan", "tehila", "thea", "theresa", "thompson", "tigris", "titanic", "torres", "tortugas", "tristan", "turini", "ural", "valentina", "valtyr", "vesuvius", "vikram", "vinod", "virgo", "vivian", "volta", "walker", "warwick", "welsh", "white", "wilson", "winona", "wright", "yaakov", "yael", "yellowstone", "yishai", "yonatan", "yosemite", "yoshiko", "young", "yuki", "yukon", "yumiko", "yutaka", "yuval", "zacharias", "zeta", "barnsley", "coralgables", "elsalvador", "glendale", "sassari", "addisababa", "memphis", "moscow", "fortlauderdale", "tilburg", "burkinafaso", "stockholm", "liberia", "moldova", "manhattan", "troyes", "goshen", "sierranevada", "havering", "gujarat", "molokai", "antarctica", "helsinki", "connecticut", "portmoresby", "havana", "tolyatti", "gujarat", "santaclarita", "michigan", "orinda", "blackpool", "huntingtonbeach", "newcastle", "tennessee", "marshallislands", "ekaterinoburg", "maroubra", "moncton", "eswatini", "duisburg", "vaticancity", "brussels", "brescia", "portlouis", "sandiego", "fostercity", "ohio", "grenoble", "noblepark", "everglades", "pasadena", "belmopan", "hungary", "barnaul", "hagen", "southsudan", "lethbridge", "capetown", "greece", "victoria", "avignon", "sugarhill", "lisbon", "drummondville", "santiagodechile", "milton", "lipetsk", "gwangju", "lapaz", "estonia", "bundaberg", "tempe", "mali", "arlington", "taipei", "douai", "radom", "hollywood", "southwark", "kingsbridge", "vienna", "concord", "merton", "lagos", "nicosia", "surrey", "surfside", "oakland", "wuxi", "lilongwe", "antwerp", "norway", "yonkers", "marshallislands", "vermont", "topeka", "bentleigheast", "charleston", "jarvisisland", "colton", "alden", "alexander", "joshua", "thomas", "frank", "khalif", "jeison", "tyler", "cameron", "nolan", "mitchell", "alex", "joseph", "dominic", "jeffrey", "devin", "william", "peter", "erick", "melanie", "liliana", "mikayla", "jaylin", "marisa", "olivia", "alexis", "keionna", "payton", "lyric", "alyssa", "macie", "cassidy", "emili", "bailey", "valery", "micaela", "dakota", "savanna", "juliet", "corrie", "emani", "feliciana", "alma", "diamondnique", "persephone", "crysta", "sherron", "ysabella", "shilyn", "charmaine", "makell", "thelma", "cami", "jazalyn", "soleil", "kerstan", "janki", "rakayla", "avarie", "aylee", "tamsin", "sumayah", "mikaela", "solveig", "mandrell", "shloime", "gohan", "rohil", "karson", "daelen", "wesam", "ocie", "marquette", "jewan", "fausto", "stone", "husain", "juliocesar", "jakevious", "ashlee", "nixon", "breven", "keean", "quartez", "yaacov", "arlington", "kalab", "tobie", "chukwubuikem", "demosthenes", "tseliot", "confucius", "henryford", "tiberius", "diocletian", "horationelson", "cicero", "eisenhower", "tacitus", "dionysus", "hypnos", "vulcan", "forseti", "oceanus", "ability", "abracadabra", "abundant", "academic", "access", "acheive", "adventure", "affluent", "airbot", "aircraft", "album", "allowance", "amped", "analog", "appear", "appetitie", "arcade", "archer", "architecture", "archive", "artistic", "asgard", "astronaut", "asynchronous", "athletic", "atmosphere", "atomic", "attitude", "attractive", "augmented", "automated", "automatic", "autonomous", "autonomy", "avatar", "awkward", "bagel", "baggage", "baguette", "balaclava", "ballade", "balloon", "bamboo", "bandana", "bandicoot", "bandsman", "bandwagon", "bangs", "banjo", "banquet", "banyan", "barbarian", "barefoot", "barista", "barmaid", "barman", "barnyard", "barrel", "barrio", "barstool", "basket", "batshit", "battle", "beer", "belong", "beverage", "billlion", "billlionaire", "binary", "blocktime", "bookseller", "booster", "boson", "brainded", "brainstorm", "breakfast", "breakfast", "bubble", "budget", "buffet", "buildings", "bungalow", "bytecode", "calendar", "camper", "campfire", "campus", "candy", "canine", "captain", "carnival", "cascade", "catalogue", "catamaran", "caviar", "celebration", "champhionship", "champion", "champion", "channel", "chapter", "character", "character", "charm", "charming", "chart", "checkpoint", "cheese", "chestnut", "chieftain", "chocolate", "choice", "civilian", "civilization", "climb", "clothes", "codex", "coffee", "colleague", "collision", "comedy", "comfort", "concept", "confuse", "conglomerate", "consesus", "constant", "constellation", "constitution", "convention", "cookie", "cooking", "craft", "crafting", "crater", "creative", "creature", "creed", "cruise", "crystal", "cultural", "custody", "decoration", "delivery", "depth", "designer", "dimension", "dinner", "direction", "disciple", "discovery", "distribute", "distrubuted", "drama", "dress", "drive", "dust", "dynamic", "dynasty", "east", "eastern", "eccentric", "ecstatic", "educator", "election", "electricity", "electron", "electronics", "emblem", "emerge", "emotion", "emphasis", "emphasis", "encourage", "endor", "entertainment", "envoy", "erudite", "evolution", "exaggerate", "exempt", "experience", "expertise", "experts", "extraordinary", "extreme", "extrovert", "facility", "factory", "farmer", "federal", "feline", "felucca", "fermion", "ferry", "fifteen", "firefighter", "fishing", "flagship", "flamboyant", "flavor", "flower", "folklore", "folklore", "forcefield", "forge", "formation", "fortune", "fossil", "franchise", "friendly", "frigate", "gallery", "gamers", "ganking", "garden", "general", "gentleman", "gentrify", "girlfriend", "glorious", "gluon", "goddess", "godfather", "golden", "gothic", "graceful", "grail", "grandma", "grandpa", "graphics", "gravity", "greatest", "growth", "habitat", "hadron", "hamburger", "hangover", "hardfork", "harvest", "headlines", "hegemon", "helicopter", "hemp", "herb", "heroes", "highway", "historical", "hogwarts", "honey", "horse", "huge", "hundred", "idiom", "imagine", "imperative", "impress", "industrial", "inflate", "intense", "intergalactic", "interplanetary", "iron", "island", "itslit", "jacket", "jetset", "jewel", "journal", "jubilant", "juggernaut", "junior", "kayak", "kingdom", "kingdom", "kingship", "kisses", "kitten", "knight", "laboratory", "lakeside", "lambda", "landmark", "landscape", "lantern", "lava", "lavender", "league", "leather", "legendary", "lemon", "lepton", "leptons", "libation", "liberal", "library", "lifestyle", "logic", "lover", "lunch", "luxuries", "magician", "magnetic", "makeup", "manager", "mascot", "massive", "medal", "meditation", "megalomaniac", "merit", "metropolis", "millennial", "million", "millionaire", "minstrel", "miracle", "mirror", "mission", "month", "moonlight", "motivation", "movement", "movies", "muon", "mystery", "mystical", "mythical", "naboo", "national", "nature", "nebula", "nebulous", "neighbor", "neighborhood", "neutron", "ninety", "nomad", "north", "northerner", "novel", "novela", "office", "optimistic", "orbit", "outpost", "package", "pagan", "painter", "paintings", "pandora", "paragon", "pastafarian", "patriarch", "peasant", "perfect", "perfection", "perform", "performances", "performer", "phenomenon", "philosophy", "photograph", "photographer", "photon", "piano", "pilots", "pioneering", "pioneers", "pitbull", "pizza", "planet", "plastic", "platinum", "pleasure", "poet", "poetry", "poncho", "pontoon", "popular", "portrait", "positron", "power", "powerful", "powers", "praise", "prestige", "prized", "probability", "progress", "prominent", "propaganda", "protein", "proton", "province", "pulsar", "puppy", "puritan", "pyramid", "quarterback", "quartermaster", "quasar", "radiance", "radical", "raft", "raider", "railcar", "rastafari", "rastafarian", "raver", "realtor", "record", "refuge", "regal", "regal", "regalia", "reggae", "relax", "relaxing", "remarkable", "remember", "resolution", "resource", "restaurant", "revive", "rhythm", "rivendell", "river", "routine", "rubber", "runningback", "saffron", "sake", "salad", "salty", "samurai", "sauce", "savage", "savant", "schedule", "scheduler", "scholar", "schrooner", "screenwriter", "season", "seasonal", "sensational", "sensible", "sensitive", "settler", "shake", "shield", "shiny", "shipping", "shire", "shogun", "shootingstar", "silk", "silver", "singer", "single", "singularity", "sixty", "skater", "skilled", "smoothbrain", "snack", "snarl", "soccer", "socialist", "solstice", "somewhere", "sorcerer", "soup", "south", "southerner", "sovereign", "species", "spectacles", "sphere", "spherical", "splendid", "sports", "sporty", "spruce", "squire", "stability", "starboard", "starburst", "stardust", "steak", "stoner", "student", "stunt", "sublime", "subliminal", "sunshine", "supreme", "swamp", "sword", "system", "talisman", "talkative", "teacher", "teahouse", "telephone", "telescope", "tent", "terraform", "thanks", "throne", "throne", "titanium", "tonight", "topic", "tournament", "traditional", "transform", "transgalactic", "transportation", "treasure", "trends", "tribe", "tributary", "trident", "triumph", "trust", "truth", "tube", "tunnel", "twenty", "ufology", "ultimate", "universal", "urban", "vacation", "valet", "variant", "variety", "various", "varriable", "varriant", "vault", "vector", "vegetable", "visual", "volatility", "wander", "wassup", "water", "waterfall", "west", "wetland", "whatever", "wheel", "wilderness", "window", "windsurfer", "windy", "wingman", "winner", "witch", "witches", "wonderful", "workshop", "yachting", "yeoman", "youth", "yuppy", "zombie", "dinosaur", "leopard", "alpaca", "woodpecker", "hippopotamus", "tortoise", "salamander", "capybara", "jaguar", "wombat", "alpineski", "snowboard", "volleyball", "minigolf", "baseball", "cricket", "badminton", "soccer", "fencing", "lacrosse", "growthhack", "datamining", "html5", "texteditor", "firewall", "bigdata", "native", "microblog", "saas", "parallax","foxwallet", "edenhorde", "magiceden", "mintable", "confessionsfr", "nftplazas", "metatattooclub", "ukapeclub", "ukapes", "wenspaces", "wenmint", "benny", "bennynft", "bennynftee", "franklin", "hasbulla", "hasbullanft", "nhat", "nascar", "mcm", "alekgoat", "funkari", "apelist", "seak", "kenkyo", "club721", "wabisabi", "omegaalpha", "dd", "stfupals", "pickspassport", "bentoboi", "squishy", "surgence", "corgicalls", "azul", "alphawtf", "rainbowalpha", "hootlist", "jers", "underdogs", "alpha101", "chilltuna", "zooverse", "pinoys", "kuroki", "kahiru", "rengaalpha", "beasts", "vivity", "1minutealpha", "buddabears", "alphacollabs", "chimpersalpha", "wenmoon", "nfttrack", "valpha", "kumite", "heromakerstudios", "azukialpha", "wenmint", "tbdalpha", "indianalpha", "mbd", "bcb", "thezooclub", "traitsniper", "theasianmint", "hellven", "spesh", "chimps", "phantabear", "neotokyo", "vvv", "steadystack", "pxquest", "amnft", "talkens", "critterz", "wagmi", "blackmarketnetwork", "wellerai", "leostudio", "otterverse", "flowerfam", "fuzzyfighters", "themos", "thenwc", "limelight", "nero", "uejj", "jimsfriends", "freakzz", "the3am", "diugang", "mev", "tripledragon", "primex", "betacalls", "bakpak", "bookofalpha", "kingdom", "pastelalpha", "yogurt", "k01", "longzu", "clonexalpha", "kaijukingz", "artypass", "nonkiverse", "affordablealpha", "fomonomo", "mbm", "wonderers", "phases", "cats lab", "artamei", "tribe", "tangerine", "boredalpha", "chinaziru", 10000, "bossbeauties", "hug", "alphatrackerr", "honeybottle"]);
let bannedWords = new Set([404, "access", "admin", "admin", "administrator", "administrators", "admins", "airdrop", "airdrop", "airdrop", "airdrops", "ama", "any", "anyside", "anyside", "apecoin", "api", "apis", "app", "apps", "authorisation", "automation", "avalanche", "axieinfinity", "binance", "binanceCoin", "binanceusd", "bitcoin", "brave", "bravebrowser", "bridge", "browser", "cardano", "cart", "cashapp", "checkout", "chainlink", "coin", "coinbase", "collab", "collabs", "contact", "corporate", "crowdfunding", "customize", "dai", "dao", "daos", "data", "database", "discord", "discount", "discount", "discounts", "doc", "docs", "documentation", "dogecoin", "domain", "domain", "domains", "editor", "email", "error", "ethereum", "ethereumclassic", "everyside", "explore", "facebook", "faq", "features", "features", "features", "fiat", "file", "file", "files", "files", "flow", "formatic", "foxwallet", "free", "freemint", "fund", "fund", "gas", "glow", "governance", "guarda", "hedera", "help", "help", "home", "home", "homepage", "hypecapital", "hyperion", "hyperioncapital", "hyperioncapitalholdings", "hyperioncapitalholdingslimited", "incubator", "influencer", "influencers", "inquiries", "inquiry", "instagram", "Integration", "Integrations", "invest", "investor", "investors", "legal", "legal", "linkedin", "litecoin", "litepaper", "looksrare", "loopring", "magiceden", "management", "matic", "medium", "metamask", "mint", "mint", "mintable", "minting", "mints", "monero", "Monetisation", "Monetization", "nearprotocol", "network", "networks", "networks", "networks", "new", "new", "newfeatures", "news", "nft", "official", "official", "opensea", "opera", "operabrowser", "page", "partner", "partners", "partners", "partners", "partnership", "partnership", "partnerships", "partnerships", "patreon", "payment", "payments", "paypal", "phantom", "phone", "pinterest", "plugin", "plugins", "polkadot", "polygon", "portal", "portal", "press", "privacy", "privacypolicy", "profile", "profiles", "promo", "promocode", "promocodes", "promotion", "promotions", "rainbowwallet", "rarible", "reddit", "register", "register", "registrar", "registration", "registration", "registrations", "registrations", "registry", "renew", "ripple", "search", "shibainu", "shop", "shops", "snapchat", "solana", "solflare", "sollet", "solsea", "specs", "spotify", "staking", "stellar", "subscription", "subscriptions", "support", "system", "systems", "team", "terms", "termsofuse", "tether", "tezos", "tiktok", "token", "token", "tokens", "tron", "tutorials", "twitch", "twitter", "uniswap", "usdc", "venmo", "vimeo", "wallet", "walletconnect", "website", "website", "websites", "webstore", "webstore", "whitelist", "whitepaper", "whitepaper", "wrappedbitcoin", "x2y2", "youtube", "zelle", "checkout", "anycoin", "anysidecoin", "coin", "anytoken", "anysidetoken", "token", "blockchain", "anyblockchain", "anysideblockchain", "anychain", "anychains", "chain", "anycloud", "anyclouds", "cloud", "anyswap", "anysideswap", "wiki", "anysidewiki", "anywiki", "foundation", "id", "identify", "identification", "index", "dex", "information", "investor", "investors", "job", "jobs", "language", "membership", "partner", "partners", "partnership", "partnerships", "press", "media", "studio", "storage", "data", "ticket", "transfer", "3commerce", "ecommerce", "commerce", "mine", "mining", "miners", "validator", "validator", "validate", "validating", "qr", "qrcode", "barcode", "exchange", "exchanges", "refund", "escrow", "adolf", "adolfhitler", "anysidefraud", "anysidescam", "arson", "benladen", "boycott", "boycottanyside", "boycotts", "confederate", "confederates", "death", "die", "fraud", "frauds", "fraudsters", "fuckanyside", "gun", "guns", "hack", "hacker", "hackers", "hacks", "hitler", "hitman", "hitmen", "isil", "isis", "kill", "kkk", "kukluxklan", "massshooting", "murder", "murder", "murderer", "nazi", "Pedophilia", "Pedophilie", "Pedophilies", "porn", "pornographer", "pornography", "rape", "rapist", "revenge", "scam", "scammer", "scammers", "ss", "torture", "torturer", "violence", "violent", "weapon", "weapons", "whitepower", "whitesupremacy", "zoophile", "zoophiles", "zoophilia"]);