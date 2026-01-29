import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// 修复Leaflet默认图标问题
const icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})

interface MapProps {
  className?: string
}

const Map = ({ className = '' }: MapProps) => {
  // 公司地址：上海市虹口区广灵四路116号（精确坐标）
  const position: [number, number] = [31.2863545460331, 121.47997834403097]

  useEffect(() => {
    // 确保Leaflet CSS正确加载
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
    document.head.appendChild(link)

    return () => {
      document.head.removeChild(link)
    }
  }, [])

  return (
    <MapContainer
      center={position}
      zoom={16}
      scrollWheelZoom={false}
      className={`w-full h-64 md:h-96 rounded-3xl ${className}`}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={icon}>
        <Popup>
          <div className="text-sm">
            <p className="font-bold mb-1">Relaxi Studio</p>
            <p>上海市虹口区广灵四路116号</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map