/*
    Copyright 2018, 2019 David Healey

    This file is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This file is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this file. If not, see <http://www.gnu.org/licenses/>.
*/

include("manifest.js");
include("presetHandler.js");
include("articulationHandler.js");
include("mixer.js");
include("settings.js");
include("preloadBar.js");

Content.makeFrontInterface(1200, 740);
Synth.deferCallbacks(true);

//Loop iterators
reg i;
reg j;

//Midi Processors
const var legatoHandler = Synth.getMidiProcessor("legato"); //Legato handler
const var overlayVelocityFilter = Synth.getMidiProcessor("overlayVelocityFilter");

//Muters
const var transitionMuter = Synth.getMidiProcessor("transitionMuter");
const var staccatoMuter = Synth.getMidiProcessor("staccatoMuter");
const var sustainMuter = Synth.getMidiProcessor("sustainMuter");
const var overlayMuter = Synth.getMidiProcessor("overlayMuter");

//Envelopes
const var liveEnvelope = Synth.getModulator("liveEnvelope");
const var sustainEnvelope = Synth.getModulator("sustainEnvelope");
const var overlayEnvelope = Synth.getModulator("overlayEnvelope");
const var staccatoEnvelope = Synth.getModulator("staccatoEnvelope");

//Glide rate knob and velocity > glide rate button
const var knbGlideRate = Content.getComponent("knbGlideRate");
Content.getComponent("btnVelocityRate").setControlCallback(onbtnVelocityRateControl);

inline function onbtnVelocityRateControl(component, value)
{
    knbGlideRate.set("enabled", 1-value);
    legatoHandler.setAttribute(legatoHandler.btnGlideVel, value); //Link to legato script
};

//Dynamics\breath control
const var dynamicsCC = Synth.getModulator("dynamicsCC");
const var knbDynamics = Content.getComponent("knbDynamics");
knbDynamics.setControlCallback(onknbDynamicsControl);

inline function onknbDynamicsControl(control, value)
{
    dynamicsCC.setAttribute(dynamicsCC.DefaultValue, value);
    legatoHandler.setAttribute(legatoHandler.knbBreath, value);
}

//Curve editors
const var btnCC = [];
const var tblCC = [];

for (i = 0; i < 5; i++)
{
    btnCC[i] = Content.getComponent("btnCC"+i);
    btnCC[i].setControlCallback(onbtnCCControl);
    tblCC[i] = Content.getComponent("tblCC"+i);
}

inline function onbtnCCControl(control, value)
{
    local idx = btnCC.indexOf(control);
    local params = ["Expression", "Dynamics", "Flutter X-Fade", "Vibrato Intensity", "Vibrato Rate"];
    
    for (i = 0; i < tblCC.length; i++)
    {
        tblCC[i].showControl(false);
        btnCC[i].setValue(false);
    }

    tblCC[idx].showControl(value);
    btnCC[idx].setValue(value);
    
    //Set parameter label
    if (value == 1)
        Content.getComponent("lblParam").set("text", params[idx]);
    else
        Content.getComponent("lblParam").set("text", "Velocity");
    
    //Show velocity table if value is false
    Content.getComponent("tblVelocity").showControl(1-value);
    
    //Show parameter specific controls
    
    //Dynamics
    Content.getComponent("btnVelDynamics").showControl(value && idx == 1);
    
    //Vibrato
    Content.getComponent("knbVibratoPitch").showControl(value && (idx == 3 || idx == 4));
    Content.getComponent("knbVibratoGain").showControl(value && (idx == 3 || idx == 4));
    Content.getComponent("knbVibratoTimbre").showControl(value && (idx == 3 || idx == 4));
}

//Includes initialisation
PresetHandler.onInitCB();
Mixer.onInitCB();
Settings.onInitCB();

//Settings button
inline function onbtnSettingsControl(component, value)
{
    Content.getComponent("pnlPage0").showControl(1-value); //Toggle instrument page
    Content.getComponent("pnlPage1").showControl(value);
	Content.getComponent("pnlPage2").showControl(0); //Hide preset browser
};

Content.getComponent("btnSettings").setControlCallback(onbtnSettingsControl);function onNoteOn()
{
	local idx = Articulations.getKSIndex(PresetHandler.patch, Message.getNoteNumber());
	
	if (idx != -1)
	    Articulations.changeArticulation(idx);
}
function onNoteOff()
{
	
}
function onController()
{
    //UACC or program change
	if (Message.getControllerNumber() == 11 || Message.isProgramChange())
    {
        local n;
        
        //if (Message.getProgramChangeNumber() != -1)
           // n = Message.getProgramChangeNumber();
        //else
            n = Message.getControllerValue();
        
        //Get articulation index of program/uacc number
        local idx = Manifest.programs.indexOf(n);
        
        //Change articulation
        if (idx != -1)
            Articulations.changeArticulation(idx);
    }
}
function onTimer()
{
	
}
function onControl(number, value)
{
	
}
