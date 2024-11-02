#!/bin/bash

# Update and install prerequisites
echo "Updating package list..."
sudo apt update -y
sudo apt install -y wget gdebi curl python3-pip git

# Install Discord
echo "Downloading and installing Discord..."
wget -O discord.deb "https://discordapp.com/api/download?platform=linux&format=deb"
sudo gdebi -n discord.deb
rm discord.deb
echo "Discord installation complete!"

# Install Steam
echo "Installing Steam..."
sudo apt install -y steam
echo "Steam installation complete!"

# Install Grapejuice for Roblox on Linux
echo "Installing Grapejuice..."
pip3 install --user grapejuice

# Set up Grapejuice (This includes installing Wine)
echo "Setting up Grapejuice..."
~/.local/bin/grapejuice install
~/.local/bin/grapejuice wineversion install-latest

echo "Grapejuice installation complete!"

# Install the old Minecraft launcher from Mojang's official download link
echo "Downloading and installing the Minecraft launcher..."
wget -O minecraft-launcher.deb "https://launcher.mojang.com/download/Minecraft.deb"
sudo gdebi -n minecraft-launcher.deb
rm minecraft-launcher.deb
echo "Old Minecraft launcher installation complete!"

# Final update to ensure all dependencies are installed
sudo apt update -y
sudo apt upgrade -y

echo "All applications (Discord, Steam, Grapejuice, Minecraft Launcher) have been installed successfully!"
