import { PixelOverlayController } from '../components/PixelOverlay'
import { useRouter } from 'next/navigation'

export function createPixelTransition(
  overlay: PixelOverlayController,
  router: ReturnType<typeof useRouter>
) {
  return async function transition(href: string) {
    await overlay.show()

    router.push(href)

    requestAnimationFrame(async () => {
      await overlay.hide()
    })
  }
}