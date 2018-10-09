/*
    Copyright 2018 David Healey

    This file is part of Libre Winds.

    Libre Winds is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Libre Winds is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Libre Winds. If not, see <http://www.gnu.org/licenses/>.
*/

namespace Manifest
{
    const var patches = {
        "Sofia Woodwinds: Piccolo":
        {
            sampleMapId: "piccolo", //Identifier for finding sample maps
	        range: [74, 105],
	        gain: 
            {
                release:-6.0
            },
            legatoSettings:
		    {
                bendTime:-15,
                minBend:5,
                maxBend:30,
                fadeTime:80
		    },
			vibratoSettings:
		    {
                gain:0.30,
                pitch:-0.15
		    }
	    },
		"Sofia Woodwinds: Concert Flute I":
		{
            sampleMapId:"flute1",
            range:[59, 96],
            gain: 
            {
                release:-6.0
            },
            legatoSettings:
            {
                bendTime:-15,
                minBend:5,
                maxBend:30,
                fadeTime:80
            },
            vibratoSettings:
            {
                gain:0.25,
                pitch:-0.10
            }
		},
		"Sofia Woodwinds: Concert Flute II":
		{
            sampleMapId:"flute2",
            range:[59, 96],
	        gain: 
            {
                release:-6.0
            },
            legatoSettings:
            {
                bendTime:-15,
                minBend:5,
                maxBend:30,
                fadeTime:80
            },
            vibratoSettings:
            {
                gain:0.25,
                pitch:-0.10
            }
		},
		"Sofia Woodwinds: Alto Flute":
		{
            sampleMapId: "altoFlute",
			range: [55, 91],
			gain: 
            {
                release:-9.0
            },
			legatoSettings:
		    {
                bendTime:-15,
                minBend:10,
                maxBend:30,
                fadeTime:80
		    },
			vibratoSettings:
		    {
                gain:0.25,
                pitch:-0.10
		    }
		},
        "Sofia Woodwinds: Oboe I":
        {
            sampleMapId: "oboe1",
	        range: [58, 91],
	        gain: 
            {
                release:-3.0
            },
            legatoSettings:
		    {
                bendTime:-20,
                minBend:30,
                maxBend:70,
                fadeTime:50
		    },
			vibratoSettings:
		    {
                gain:0.35,
                pitch:-0.07
		    }
	    },
        "Sofia Woodwinds: Oboe II":
        {
            sampleMapId: "oboe2",
	        range: [58, 91],
	        gain: 
            {
                release:-3.0
            },
            legatoSettings:
		    {
                bendTime:-20,
                minBend:30,
                maxBend:70,
                fadeTime:50
		    },
			vibratoSettings:
		    {
                gain:0.35,
                pitch:-0.07
		    }
	    },
        "Sofia Woodwinds: Cor Anglais":
        {
            sampleMapId: "englishHorn",
	        range: [52, 83],
	        gain: 
            {
                release:-3.0
            },
            legatoSettings:
		    {
                bendTime:20,
                minBend:30,
                maxBend:60,
                fadeTime:40
		    },
			vibratoSettings:
		    {
                gain:0.35,
                pitch:-0.07
		    }
	    },
        "Sofia Woodwinds: Clarinet I":
        {
            sampleMapId: "clarinet1",
	        range: [50, 91],
	        gain: 
            {
                release:-6.0
            },
            legatoSettings:
		    {
                bendTime:-15,
                minBend:20,
                maxBend:40,
                fadeTime:40
		    },
			vibratoSettings:
		    {
                gain:0.30,
                pitch:-0.07
		    }
	    },
        "Sofia Woodwinds: Clarinet II":
        {
            sampleMapId: "clarinet2",
	        range: [50, 91],
	        gain: 
            {
                release:-6.0
            },
            legatoSettings:
		    {
                bendTime:-15,
                minBend:20,
                maxBend:40,
                fadeTime:30
		    },
			vibratoSettings:
		    {
                gain:0.30,
                pitch:-0.07
		    }
	    },
        "Sofia Woodwinds: Bass Clarinet":
        {
            sampleMapId: "bassClarinet",
	        range: [34, 75],
	        gain: 
            {
                release:-6.0
            },
            legatoSettings:
		    {
                bendTime:-15,
                minBend:20,
                maxBend:40,
                fadeTime:30
		    },
			vibratoSettings:
		    {
                gain:0.30,
                pitch:-0.07
		    }
	    },
        "Sofia Woodwinds: Bassoon I":
        {
            sampleMapId: "bassoon1",
	        range: [34, 74],
	        gain: 
            {
                release:0.0
            },
            legatoSettings:
		    {
                bendTime:-15,
                minBend:25,
                maxBend:50,
                fadeTime:70
		    },
			vibratoSettings:
		    {
                gain:0.35,
                pitch:-0.08
		    }
	    },
        "Sofia Woodwinds: Bassoon II":
        {
            sampleMapId: "bassoon2",
	        range: [34, 74],
	        gain: 
            {
                release:0.0
            },
            legatoSettings:
		    {
                bendTime:-15,
                minBend:25,
                maxBend:50,
                fadeTime:80
		    },
			vibratoSettings:
		    {
                gain:0.35,
                pitch:-0.08
		    }
	    },
        "Sofia Woodwinds: Contrabassoon":
        {
            sampleMapId: "contrabassoon",
	        range: [22, 55],
	        gain:
            {
                release:0.0
            },
            legatoSettings:
		    {
                bendTime:-15,
                minBend:25,
                maxBend:50,
                fadeTime:80
		    },
			vibratoSettings:
		    {
                gain:0.35,
                pitch:-0.10
		    }
	    },
	};
}
